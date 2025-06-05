import React, { useEffect, useState } from 'react';
import {
  fetchPostsFromContentful
} from "../../../lib/contentfulContentsApi";
import Link from 'next/link';

const BlogListPage: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      // 非同期関数を定義
      const loadPosts = async () => {
        try {
          const fetchedPosts = await fetchPostsFromContentful(); // 非同期で投稿を取得
          setPosts(fetchedPosts); // 取得した投稿をステートにセット
        } catch (error) {
          console.error("投稿の取得に失敗しました:", error);
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
            <span> - {new Date(post.publishedDate).toLocaleDateString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogListPage;
