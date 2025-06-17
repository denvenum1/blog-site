// app/blogs/page.tsx (Server Component)
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import BlogsClient from "./BlogsClient";

export default async function BlogsPage() {
  const { data: posts } = await sanityFetch({ query: POST_QUERY });

  return (
    <div className="flex gap-6 mt-7">
      <BlogsClient posts={posts} />
      <SanityLive />
    </div>
  );
}
