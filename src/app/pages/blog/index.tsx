import React, { useEffect, useState } from 'react';
import {
  fetchPostsFromContentful
} from "../../../lib/contentfulContentsApi";
import Link from 'next/link';

interface PostType {
  id: string;
  title: string;
  status: string;
  date: string;
  slug: string;
  content: string;
  publishedDate?: string;
}

const BlogListPage: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      // 非同期関数を定義
      const loadPosts = async () => {
        try {
          const fetchedPosts = await fetchPostsFromContentful(); // 非同期で投稿を取得
          // fetchedPostsにはpublishedDateがないため、dateをpublishedDateとして扱う
          const postsWithPublishedDate = fetchedPosts.map(post => ({
            ...post,
            publishedDate: post.date,
          }));
          setPosts(postsWithPublishedDate); // 取得した投稿をステートにセット
          setLoading(false);
        } catch (error) {
          console.error("投稿の取得に失敗しました:", error);
          setLoading(false);
          // エラーハンドリング (例: エラーメッセージをステートにセットするなど)
        }
      };
      // 非同期関数を呼び出し
      loadPosts();

      return () => {};
    }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (posts.length === 0) {
    return <div>ブログ記事がありません。</div>;
  }

  return (
    <div>
      <h1>ブログ記事一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
            <span> - {new Date(post.publishedDate ?? post.date).toLocaleDateString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogListPage;
