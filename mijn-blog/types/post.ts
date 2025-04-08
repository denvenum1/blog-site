export type Post = {
    _id: string;
    title: string;
    description?: string;
    category?: string;
    pitch?: string;
    date?: string;
    image?: {
      asset?: {
        url: string;
      };
    };
  };
  