import Banner from "@/components/Banner";
import PostCard from "@/components/PostCard";
import { POST_QUERY } from "@/sanity/lib/queries";
import { PostType } from "@/components/PostCard"
import Link from "next/link";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home() {

  const { data: posts } = await sanityFetch({ query: POST_QUERY })
  return (
    <>
      <Banner />
      <section className="section_container flex flex-col md:flex-row items-start gap-8">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5">Over mijn stage</h2>
          <p className="text-gray-700 leading-relaxed">
            Ik loop stage bij Icapps, een digitaal bureau in Antwerpen dat zich specialiseert in het ontwerpen en ontwikkelen van digitale producten zoals apps, webplatformen en interne tools voor bedrijven.
            <br /><br />
            Als backend developer werk ik mee aan een project rond reporting en capaciteitsplanning, waarbij ik gebruik maak van NestJS, TypeScript en tools zoals Slack, Bitbucket, Confluence en Harvest.
            <br /><br />
            Deze blogsite dient om mijn traject vast te leggen: van technische taken tot leerervaringen en teamwerking. Zo hou ik mijn stageproces overzichtelijk en kan ik ook terugblikken op mijn groei.
          </p>
        </div>

        <div className="md:w-1/2 pt-20">
          <img
            src="IcappsBureau.jpg"
            alt="stage bureau"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </section>

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
            posts.slice(0, 3).map((post: PostType) => (
              <PostCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No blogs found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}