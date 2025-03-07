import Banner from "@/components/Banner";
import PostCard from "@/components/PostCard";
import { POST_QUERY } from "@/sanity/lib/queries";
import { PostType } from "@/components/PostCard"
import Link from "next/link";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home() {

  const { data: posts } = await sanityFetch({query: POST_QUERY})
  return (
    <>
      <Banner />
      <section className="section_container">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-20">
          <span className="block">
            Mijn Blogs
          </span>
          <Link href={`./blogs`} className="block text-lg md:text-xl text-gray-500 dark:text-gray-400 mt-2 w-28">
            Zie meer {">"}
          </Link>
        </h2>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.slice(0, 4).map((post: PostType) => (
              <PostCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No blogs found</p>
          )}
        </ul>
      </section>
      <SanityLive/>
    </>
  );
}