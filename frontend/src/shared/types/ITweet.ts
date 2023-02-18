export default interface ITweet {
  id: number;
  parentId: number | null;
  text: string;
  createdAt: string;
  isRetweet: boolean;
  user: {
    name: string;
    username: string;
  };
  origin?: {
    createdAt: string;
    user: {
      name: string;
      username: string;
    };
  };
  likes: number;
  liked: boolean;
  replies: number;
  views: number;
  retweets: number;
  retweeted: boolean;
  images?: {
    type: string;
    name: string;
    data: string;
  }[];
}
