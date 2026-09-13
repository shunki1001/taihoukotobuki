import React from "react";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "ブログ記事一覧 | 寿の店",
  description: "寿の店の店主が気ままに情報を発信するブログの記事一覧です。",
};

// サーバーコンポーネント化し、記事一覧をサーバー側で取得する(SEO・LCP改善)。
// 取得エラーと「0件」を見分けられるよう、エラー用のフォールバック表示を持つ。
const BlogListPage = async () => {
  let posts: Awaited<ReturnType<typeof fetchPostsFromContentful>> = [];
  let error: string | null = null;

  try {
    posts = await fetchPostsFromContentful();
  } catch (e) {
    console.error("投稿の取得に失敗しました:", e);
    error = "記事一覧の取得に失敗しました。時間をおいて再度お試しください。";
  }

  return (
    <>
      <Header />
      <Container sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          最新記事一覧
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          寿の店の店主が気ままに情報を発信するブログです。
        </Typography>

        {error ? (
          <Typography
            variant="h6"
            color="error"
            align="center"
            sx={{ mt: 4 }}
          >
            {error}
          </Typography>
        ) : posts.length === 0 ? (
          <Typography variant="h6" align="center" sx={{ mt: 4 }}>
            ブログ記事がありません。
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {posts.map((post) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.slug}>
                <Card>
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Typography variant="h5" component="div">
                          {post.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {new Date(post.date).toLocaleDateString()}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
      <Link href="/">
        <Fab
          color="primary"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
          aria-label="top"
        >
          <HomeIcon />
        </Fab>
      </Link>
      <Footer />
    </>
  );
};

export default BlogListPage;
