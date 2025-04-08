import { defineQuery } from "next-sanity";

export const POST_QUERY = defineQuery(`*[_type == "post"] | order(_createdAt desc){
  _id,
  title,
  description,
  category,
  pitch,
  image {
    asset->{
      url
    }
  },
    date,
}`);

export const POST_BY_ID_QUERY = `*[_type == "post" && _id == $_id][0] {
  _id,
  title, 
  image {
    asset->{
      url
    }
  }, 
  description,
  pitch,
  category, 
  _id,
  date,
}`;
