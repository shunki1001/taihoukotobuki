"use client";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import React, { useState, useEffect } from "react";
import Link from "next/link";

// トップページに表示する最大件数(それ以上は一覧ページに任せる)
const MAX_LATEST_POSTS = 3;
const MAX_IRREGULAR_HOURS = 3;

import { fetchPostsFromContentful } from "../../lib/contentfulContentsApi";
import {
  fetchIrregularHours,
  IrregularHour,
} from "../../lib/contentfulCalendarApi";

interface PostType {
  id: string;
  title: string;
  status: string;
  date: string;
  slug: string;
  content: string;
}

// セクション共通の見出し(Menu/Aboutの「◯◯」見出しと同じ太字・中央揃えのトーンに合わせる)
const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <Typography
    sx={{
      fontSize: "1.75em",
      fontWeight: 700,
      color: "#a74535",
      textAlign: "center",
      mb: 3,
    }}
  >
    {children}
  </Typography>
);

const LatestInfo = () => {
  const [latestPosts, setLatestPosts] = useState<PostType[]>([]);
  const [irregularHours, setIrregularHours] = useState<IrregularHour[]>([]);
  // 取得失敗を「0件」と区別して表示するためのエラーstate。
  // undefined=未確認, null=成功, string=エラーメッセージ
  const [postsError, setPostsError] = useState<string | null>(null);
  const [hoursError, setHoursError] = useState<string | null>(null);

  useEffect(() => {
    // 非同期関数を定義
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchPostsFromContentful(); // 非同期で投稿を取得
        setLatestPosts(fetchedPosts); // 取得した投稿をステートにセット
      } catch (error) {
        console.error("投稿の取得に失敗しました:", error);
        setPostsError("最新記事の取得に失敗しました。時間をおいて再度お試しください。");
      }
    };

    // 非同期関数を定義
    const loadIrregularHours = async () => {
      try {
        const fetchedPosts = await fetchIrregularHours(); // 非同期で投稿を取得
        setIrregularHours(fetchedPosts); // 取得した投稿をステートにセット
      } catch (error) {
        console.error("投稿の取得に失敗しました:", error);
        setHoursError(
          "営業時間変更情報の取得に失敗しました。時間をおいて再度お試しください。"
        );
      }
    };

    // 非同期関数を呼び出し
    loadPosts();
    loadIrregularHours();

    return () => {};
  }, []);
  return (
    <Box
      sx={{
        pt: { xs: 4, sm: 8 },
        pb: { xs: 8, sm: 12 },
        px: 1,
        background: "rgba(240,240,240,1)",
        color: "black",
      }}
      id="available"
    >
      <Container>
        <Box sx={{ width: "100%", mt: 4 }}>
          <SectionHeading>最新のブログ記事</SectionHeading>
          {postsError ? (
            <Typography color="error" sx={{ textAlign: "center" }}>
              {postsError}
            </Typography>
          ) : (
            <Grid container spacing={3}>
              {latestPosts.slice(0, MAX_LATEST_POSTS).map((post) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
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
                          sx={{
                            fontSize: "1.1em",
                            fontWeight: 700,
                            mb: 1,
                          }}
                        >
                          {post.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {post.date}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
              {latestPosts.length === 0 && (
                <Grid size={12}>
                  <Typography sx={{ textAlign: "center", color: "text.secondary" }}>
                    ブログ記事がありません。
                  </Typography>
                </Grid>
              )}
            </Grid>
          )}
          {!postsError && latestPosts.length > MAX_LATEST_POSTS && (
            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Button
                component={Link}
                href="/blog"
                variant="outlined"
                sx={{
                  color: "#a74535",
                  borderColor: "#a74535",
                  "&:hover": {
                    borderColor: "#a74535",
                    backgroundColor: "rgba(167,69,53,0.06)",
                  },
                }}
              >
                もっと見る
              </Button>
            </Box>
          )}
        </Box>

        <Box sx={{ width: "100%", mt: 8 }}>
          <SectionHeading>営業時間の変更のお知らせ</SectionHeading>
          {hoursError ? (
            <Typography color="error" sx={{ textAlign: "center" }}>
              {hoursError}
            </Typography>
          ) : irregularHours.length === 0 ? (
            <Typography sx={{ textAlign: "center", color: "text.secondary" }}>
              営業時間の変更はありません
            </Typography>
          ) : (
            <Grid container spacing={3}>
              {irregularHours.slice(0, MAX_IRREGULAR_HOURS).map((hour, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 2,
                      backgroundColor: hour.isClosed
                        ? "rgba(167,69,53,0.06)"
                        : "white",
                    }}
                  >
                    <CardContent>
                      <Typography sx={{ fontWeight: 700, mb: 0.5 }}>
                        {hour.date}
                      </Typography>
                      {hour.isClosed ? (
                        <Typography
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            color: "#a74535",
                            fontWeight: 700,
                          }}
                        >
                          <EventBusyIcon fontSize="small" />
                          休業
                        </Typography>
                      ) : (
                        <Typography>
                          {hour.openTime ?? "未定"} - {hour.closeTime ?? "未定"}
                        </Typography>
                      )}
                      {hour.notes && (
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                          {hour.notes}
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default LatestInfo;
