export type ApiArticles = {
  articles: ArticleEntity[];
};

export type ArticleEntity = {
  id: number;
  name: string;
  author: {
    id: number;
    name: string;
  };
  createdAt: string;
};
