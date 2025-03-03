import { defineQuery } from "next-sanity";

export const POST_QUERY =
defineQuery(`*[_type == "post" && defined(slug.current)] | order(_createdAt desc){
  description,
  title, 
  image, 
  pitch,
  category, 
  _id, slug, 
  _createdAt
}`)