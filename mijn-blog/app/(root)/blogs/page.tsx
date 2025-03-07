import PostCard, { PostType } from "@/components/PostCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";

export default async function Blogs() {
  const { data: posts } = await sanityFetch({query: POST_QUERY})
  
  return (
    <ul className="mt-7 card_grid">
      {posts?.length > 0 ? (
        posts.map((post: PostType) => (
          <PostCard key={post?._id} post={post} />
        ))
      ) : (
        <p className="no-results">No blogs found</p>
      )}
      <SanityLive/>
    </ul>
  );
}