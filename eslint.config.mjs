import nextConfig from "eslint-config-next";
import prettierConfig from "eslint-config-prettier";

// Next.js 16で `next lint` コマンド自体が廃止されたため、
// ESLint 9のflat configに移行し、`eslint .` で直接実行する。
const eslintConfig = [...nextConfig, prettierConfig];

export default eslintConfig;
