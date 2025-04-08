export type Post = {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
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
