import React from "react";
import type { Metadata } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
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
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(180deg, rgba(253,212,110,0.18) 0%, rgba(253,212,110,0.05) 240px, rgba(253,212,110,0) 480px)",
        }}
      >
        <Container sx={{ pt: 6, pb: 4 }}>
          <Typography
            sx={{
              fontSize: "2em",
              fontWeight: 700,
              color: "#a74535",
              textAlign: "center",
            }}
          >
            最新記事一覧
          </Typography>
          <Typography variant="body1" align="center" sx={{ mt: 1, mb: 5 }}>
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
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        borderRadius: 2,
                        borderLeft: "4px solid #a74535",
                        transition: "box-shadow 0.2s, transform 0.2s",
                        "&:hover": {
                          boxShadow: 6,
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      <CardContent>
                        <Typography
                          sx={{ fontSize: "1.15em", fontWeight: 700, mb: 1 }}
                        >
                          {post.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {new Date(post.date).toLocaleDateString()}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>
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
