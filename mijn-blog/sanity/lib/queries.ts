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

export const POST_BY_ID_QUERY = `*[_type == "post" && _id == $_id][0] {
  _id,
  title, 
  image, 
  pitch,
  category, 
  _id, slug, 
  _createdAt
}`;
