"use client";
import { Container, Box, Typography, Grid, Paper} from '@mui/material'
import React, {useState, useEffect} from 'react'
import Link from 'next/link';

import {
  fetchPostsFromContentful,
} from "../../lib/contentfulContentsApi";
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

const LatestInfo = () => {
  const [latestPosts, setLatestPosts] = useState<PostType[]>([]);
  const [irregularHours, setIrregularHours] = useState<IrregularHour[]>([]);

  useEffect(() => {
      // 非同期関数を定義
      const loadPosts = async () => {
        try {
          const fetchedPosts = await fetchPostsFromContentful(); // 非同期で投稿を取得
          setLatestPosts(fetchedPosts); // 取得した投稿をステートにセット
        } catch (error) {
          console.error("投稿の取得に失敗しました:", error);
          // エラーハンドリング (例: エラーメッセージをステートにセットするなど)
        }
      };

      // 非同期関数を定義
      const loadIrregularHours = async () => {
        try {
          const fetchedPosts = await fetchIrregularHours(); // 非同期で投稿を取得
          setIrregularHours(fetchedPosts); // 取得した投稿をステートにセット
        } catch (error) {
          console.error("投稿の取得に失敗しました:", error);
          // エラーハンドリング (例: エラーメッセージをステートにセットするなど)
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
                <Typography variant="h5" gutterBottom>
                最新のブログ記事
                </Typography>
                <Grid container spacing={2}>
                  {latestPosts.map((post) => (
                    <Grid item xs={12} sm={6} md={4} key={post.id}>
                      <Link href={`/blog/${post.slug}`} passHref>
                        <Paper elevation={3} sx={{ p: 2 }}>
                          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                            {post.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {post.status} - {post.date}
                          </Typography>
                        </Paper>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
            </Box>

            <Box sx={{ width: "100%", mt: 4 }}>
                <Typography variant="h5" gutterBottom>
                営業時間の変更のお知らせ
                </Typography>
                <Grid container spacing={2}>
                {irregularHours.length === 0 && (
                  <Grid item xs={12} sm={4}>
                    <Typography sx={{mt:2, mb:2}}>営業時間の変更はありません</Typography>
                  </Grid>
                )}
                {irregularHours.map((hour, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="body1">
                        {hour.date}{" "}
                        {hour.isClosed
                            ? "休業"
                            : `${hour.openTime ?? "未定"} - ${hour.closeTime ?? "未定"}`}
                        </Typography>
                        {hour.notes && (
                        <Typography variant="body2" color="text.secondary">
                            {hour.notes}
                        </Typography>
                        )}
                    </Paper>
                    </Grid>
                ))}
                </Grid>
            </Box>
        </Container>
    </Box>
  )
}

export default LatestInfo
