export interface CommentsResult {
data: Comment[];
meta: Meta;
page: number;
}

export interface Meta {
page: number;
}

export interface Comment {
id_comment: number;
id_post: number;
autor: string;
body: string;
img: string;
}
