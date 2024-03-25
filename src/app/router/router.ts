export interface RouterInterface {
  id: string;
  name: string;
}

const router: RouterInterface[] = [
  {
    id: "about",
    name: "大宝寿の店とは",
  },
  {
    id: "menu",
    name: "メニュー",
  },
  {
    id: "available",
    name: "営業時間",
  },
  {
    id: "access",
    name: "アクセス",
  },
  {
    id: "contact",
    name: "お問い合わせ",
  },
];

export default router;
