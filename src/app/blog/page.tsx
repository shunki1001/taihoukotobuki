"use client";
import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Link from "next/link";
import Fab from "@mui/material/Fab";
import HomeIcon from "@mui/icons-material/Home";
import Header from "./Header";
import Footer from "../pages/Footer";
import { fetchPostsFromContentful } from "../../lib/contentfulContentsApi";

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
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchPostsFromContentful();
        const postsWithPublishedDate = fetchedPosts.map(post => ({
          ...post,
          publishedDate: post.date,
        }));
        setPosts(postsWithPublishedDate);
        setLoading(false);
      } catch (error) {
        console.error("投稿の取得に失敗しました:", error);
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

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

  if (posts.length === 0) {
    return (
      <>
        <Header />
        <Container sx={{ mt: 4 }}>
          <Typography variant="h6">ブログ記事がありません。</Typography>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          最新記事一覧
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          寿の店の店主が気ままに情報を発信するブログです。
        </Typography>
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.slug}>
              <Card>
                <CardActionArea component={Link} href={`/blog/${post.slug}`}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {new Date(post.publishedDate ?? post.date).toLocaleDateString()}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Fab
        component={Link}
        href="/"
        color="primary"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        aria-label="top"
      >
        <HomeIcon />
      </Fab>
      <Footer />
    </>
  );
};

export default BlogListPage;
