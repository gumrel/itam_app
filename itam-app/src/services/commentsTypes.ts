export interface IPost {
  id: number;
  title: string;
  body: string;
  tags: Array<string>;
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

export interface IPosts {
  posts: IPost;
  total: number;
  skip: number;
  limit: number;
}

export interface IUser {
  id: number;
  username: string;
  fullName: string;
}

export interface IComment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: IUser;
}

export interface IComments {
  comments: IComment;
  total: number;
  skip: number;
  limit: number;
}
