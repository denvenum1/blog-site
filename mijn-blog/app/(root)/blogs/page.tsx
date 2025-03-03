import PostCard, { PostType } from "@/components/PostCard";
import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";

const posts = await client.fetch(POST_QUERY)

export default function Blog() {
  return (
    <ul className="mt-7 card_grid">
      {posts?.length > 0 ? (
        posts.map((post: PostType) => (
          <PostCard key={post?._id} post={post} />
        ))
      ) : (
        <p className="no-results">No blogs found</p>
      )}
    </ul>
  );
}