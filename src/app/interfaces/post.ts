export interface PostResult {
    data: Post[];
    meta: Meta;
}

export interface Meta {
    page: number;
}

export interface Post {
    id: number;
    title: string;
    categorias: string;
    contenido: string;
    author: string;
    dates: string;
}

