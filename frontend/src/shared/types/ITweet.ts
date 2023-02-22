import Avatar from './avatar';

export default interface ITweet {
  id: number;
  parentId: number | null;
  text: string;
  createdAt: string;
  isRetweet: boolean | null;
  user: {
    name: string;
    username: string;
    avatar: Avatar;
  };
  origin: {
    createdAt?: string;
    user?: {
      name: string;
      username: string;
      avatar: Avatar;
    };
  };
  likes: number;
  liked: boolean;
  replies: number;
  views: number;
  viewed: boolean;
  retweets: number;
  retweeted: boolean;
  images: {
    type?: string;
    name?: string;
    data?: string;
  }[];
}
