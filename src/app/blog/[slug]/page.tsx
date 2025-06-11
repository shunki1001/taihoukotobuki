"use client"
import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { useParams } from 'next/navigation';
import { fetchBlogPostById, BlogFormData } from "../../../lib/contentfulContentsApi";

const BlogPostPage: React.FC = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogFormData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async (slug: string) => {
      try {
        const fetchedPost = await fetchBlogPostById(slug);
        setPost(fetchedPost);
      } catch (error) {
        console.error("投稿の取得に失敗しました:", error);
      } finally {
        setLoading(false);
      }
    };

    if (typeof slug === 'string') {
      loadPost(slug);
    }
  }, [slug]);

  if (loading) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5">Loading...</Typography>
      </Container>
    );
  }

  if (!post) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6">記事が見つかりません。</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h3" component="h1" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            公開日: {new Date(post.publishedDate).toLocaleDateString()}
          </Typography>
          <Box mt={2}>
            {/* TODO: MarkdownをHTMLに変換して表示 */}
            <Typography variant="body1" component="div">
              {post.content}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default BlogPostPage;
