import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  fetchBlogPostById,
  BlogFormData
} from "../../../lib/contentfulContentsApi";

const BlogPostPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<BlogFormData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 非同期関数を定義
    const loadPosts = async (slug: string) => {
      try {
        const fetchedPost = await fetchBlogPostById(slug); // 非同期で投稿を取得
        setPost(fetchedPost); // 取得した投稿をステートにセット
      } catch (error) {
        console.error("投稿の取得に失敗しました:", error);
        // エラーハンドリング (例: エラーメッセージをステートにセットするなど)
      } finally {
        setLoading(false);
      }
    };
    // 非同期関数を呼び出し
    if (typeof slug === 'string') {
      loadPosts(slug);
    }

    return () => {};
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>記事が見つかりません。</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>公開日: {new Date(post.publishedDate).toLocaleDateString()}</p>
      <div>
        {/* TODO: MarkdownをHTMLに変換して表示 */}
        <pre>{post.content}</pre>
      </div>
    </div>
  );
};

export default BlogPostPage;
