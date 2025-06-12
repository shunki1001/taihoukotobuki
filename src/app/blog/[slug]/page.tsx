"use client";
import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Link from "next/link";
import Fab from "@mui/material/Fab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams } from "next/navigation";
import {
  fetchBlogPostById,
  BlogFormData,
  getAssetUrl,
} from "../../../lib/contentfulContentsApi";
import Header from "../Header";
import Footer from "@/app/pages/Footer";
import Image from "next/image";

const BlogPostPage: React.FC = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogFormData | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

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

    if (typeof slug === "string") {
      loadPost(slug);
    }
  }, [slug]);

  useEffect(() => {
    const fetchImageUrl = async () => {
      if (post && post.imageAssetId) {
        const url = await getAssetUrl(post.imageAssetId);
        setImageUrl(url ?? null);
      } else {
        setImageUrl(null);
      }
    };
    if (!post) return;
    fetchImageUrl();
  }, [post]);

  if (loading) {
    return (
      <>
        <Header />
        <Container sx={{ mt: 4 }}>
          <Typography variant="h5">Loading...</Typography>
        </Container>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Header />
        <Container sx={{ mt: 4 }}>
          <Typography variant="h6">記事が見つかりません。</Typography>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Container sx={{ mt: 4, mb: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom>
              {post.title}
            </Typography>
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={post.title}
                width={1200}
                height={800}
                style={{ width: "100%", height: "auto" }}
              />
            ) : null}
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
      <Fab
        component={Link}
        href="/blog"
        color="primary"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        aria-label="back to list"
      >
        <ArrowBackIcon />
      </Fab>
      <Footer />
    </>
  );
};

export default BlogPostPage;
