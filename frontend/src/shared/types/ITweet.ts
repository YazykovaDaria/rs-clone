export default interface ITweet {
  id: number;
  parentId: number | null;
  text: string;
  createdAt: string;
  user: {
    name: string;
    username: string;
  };
  likes: number;
  liked: boolean;
  replies: number;
  views: number;
  images?: {
    type: string;
    name: string;
    data: string;
  }[];
}
