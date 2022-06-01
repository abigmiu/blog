export interface IArticleAdd {
    title: string;
    content: string
}
export interface IArticle extends IArticleAdd {
    id: number;
    createdAt: string;
    updateAt: string;
    title: string;
    content: string;
    intro: string; // 简介
    isDel: boolean; // 是否删除
    isTop: boolean; // 是否置顶
}
