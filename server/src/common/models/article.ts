export interface IArticleAdd {
    title: string;
    content: string;
    tagId: number;
    categoryId: number;
}
export interface IArticle extends IArticleAdd {
    id: number;
    createdAt: string;
    updateAt: string;
    intro: string; // 简介
    isDel: boolean; // 是否删除
    isTop: boolean; // 是否置顶
}
