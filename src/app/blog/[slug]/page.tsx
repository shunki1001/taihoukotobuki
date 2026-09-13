import React from "react";
import type { Metadata } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Link from "next/link";
import Fab from "@mui/material/Fab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  fetchBlogPostById,
  getAssetUrl,
} from "../../../lib/contentfulContentsApi";
import Header from "../Header";
import Footer from "@/app/pages/Footer";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

const CONTENT_EXCERPT_LENGTH = 120;

// 記事ごとのtitle/description/OGP画像をSNSシェア時にも反映させるため、
// generateMetadataでサーバー側から取得する
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBlogPostById(slug);

  if (!post) {
    return { title: "記事が見つかりません | 寿の店" };
  }

  const description = post.content.slice(0, CONTENT_EXCERPT_LENGTH);
  const imageUrl = post.imageAssetId
    ? await getAssetUrl(post.imageAssetId)
    : undefined;

  return {
    title: `${post.title} | 寿の店`,
    description,
    openGraph: {
      title: post.title,
      description,
      images: imageUrl ? [{ url: imageUrl }] : undefined,
      type: "article",
    },
  };
}

// サーバーコンポーネント化し、記事本文をサーバー側で取得する(SEO・LCP改善)。
// 取得エラーと「記事が見つからない」を見分けられるよう、エラー用のフォールバック表示を持つ。
const BlogPostPage = async ({ params }: Props) => {
  const { slug } = await params;

  let post: Awaited<ReturnType<typeof fetchBlogPostById>> = null;
  let error: string | null = null;

  try {
    post = await fetchBlogPostById(slug);
  } catch (e) {
    console.error("投稿の取得に失敗しました:", e);
    error = "記事の取得に失敗しました。時間をおいて再度お試しください。";
  }

  const imageUrl =
    post && post.imageAssetId ? await getAssetUrl(post.imageAssetId) : null;

  return (
    <>
      <Header />
      <Container sx={{ mt: 4, mb: 4 }}>
        {error ? (
          <Typography variant="h6" color="error">
            {error}
          </Typography>
        ) : !post ? (
          <Typography variant="h6">記事が見つかりません。</Typography>
        ) : (
          <Card>
            <CardContent>
              <Typography variant="h4" component="h2" gutterBottom>
                {post.title}
              </Typography>
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={post.title}
                  width={900}
                  height={600}
                  style={{ width: "100%", height: "auto" }}
                />
              ) : null}
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
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
        )}
      </Container>
      <Link href="/blog">
        <Fab
          color="primary"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
          aria-label="back to list"
        >
          <ArrowBackIcon />
        </Fab>
      </Link>
      <Footer />
    </>
  );
};

export default BlogPostPage;
