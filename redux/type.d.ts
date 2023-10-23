interface IArticle {
    id: number
    title: string
    body: string
}

type ArticleState = {
    articles: IArticle[]
    error: object
}

type ArticleAction = {
    type: string
    article: IArticle
}

type DispatchType = (args: ArticleAction) => ArticleAction