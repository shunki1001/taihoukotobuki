/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // MIMEタイプスニッフィングを無効化する
          { key: "X-Content-Type-Options", value: "nosniff" },
          // 自サイトを外部からiframeに埋め込ませない(クリックジャッキング対策)。
          // Google Maps/YouTubeの埋め込みは自サイトが埋め込む側なので影響しない。
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // 外部サイトへのリンク遷移時に送るリファラ情報を最小限にする
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
