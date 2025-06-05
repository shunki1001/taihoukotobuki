"use client";
import { Container, Box, Typography, Grid, Paper} from '@mui/material'
import React, {useState, useEffect} from 'react'

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
            {/* <Box sx={{ width: "100%", mt: 4 }}>
                <Typography variant="h5" gutterBottom>
                最新のブログ記事
                </Typography>
                <Grid container spacing={2}>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {latestPosts.map((post: { id: string; title: string; status: string; date: string }) => (
                    <tr key={post.id}>
                        <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{post.title}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 sm:hidden">{post.status} - {post.date}</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            post.status === '公開済み' ? 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100'
                        }`}>
                            {post.status}
                        </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden md:table-cell">
                        {post.date}
                        </td>
                    </tr>
                    ))}
                </tbody>
                </Grid>
            </Box> */}

            <Box sx={{ width: "100%", mt: 4 }}>
                <Typography variant="h5" gutterBottom>
                営業時間の変更のお知らせ
                </Typography>
                <Grid container spacing={2}>
                {irregularHours.length === 0 && (
                    <Typography>お知らせはありません。</Typography>
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
