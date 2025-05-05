import Banner from "@/components/Banner";
import PostCard from "@/components/PostCard";
import { POST_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { Post } from "../types/post";

export default async function Home() {
  const { data: posts } = await sanityFetch({ query: POST_QUERY });
  return (
    <>
      <Banner />
      <section className="flex flex-col-reverse xl:flex-row items-center justify-around gap-6 my-12 mt-20 line_bottom pb-20">
        <div className="max-w-xl text-left xl:w-1/2">
          <h2 className="text-4xl xl:text-5xl font-extrabold mb-5 text-center">
            Over mijn stage
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ik loop stage bij Icapps, een digitaal bureau in Antwerpen dat zich
            specialiseert in het ontwerpen en ontwikkelen van digitale producten
            zoals apps, webplatformen en interne tools voor bedrijven.
            <br />
            <br />
            Als backend developer werk ik mee aan een project rond reporting en
            capaciteitsplanning, waarbij ik gebruik maak van NestJS, TypeScript
            en tools zoals Slack, Bitbucket, Confluence en Harvest.
            <br />
            <br />
            Deze blogsite dient om mijn traject vast te leggen: van technische
            taken tot leerervaringen en teamwerking. Zo hou ik mijn stageproces
            overzichtelijk en kan ik ook terugblikken op mijn groei.
          </p>
        </div>

        <div className="xl:w-1/2 flex justify-center items-center mb-10">
          <img
            src="IcappsBureau.jpg"
            alt="stage bureau"
            className="w-[70%] h-auto rounded-xl shadow-lg object-cover xl:w-[80%]"
          />
        </div>
      </section>

      <section className="flex flex-col xl:flex-row items-center gap-6 my-12 mt-20 line_bottom pb-20">
        <div className="xl:w-1/2 flex justify-center mb-10">
          <img
            src="MaartenAnckaert.png"
            alt="Foto van mijn mentor"
            className="object-cover rounded-full shadow-md"
          />
        </div>

        <div className="max-w-xl text-left xl:w-1/2">
          <h2 className="text-4xl xl:text-5xl font-extrabold mb-5 text-center">
            Over mijn mentor
          </h2>
          <p className="text-base leading-relaxed">
            Tijdens mijn stage bij Icapps werd ik begeleid door Maarten
            Anckaert. Hij was mijn mentor en het eerste aanspreekpunt binnen het
            team. Vanaf het begin maakte hij tijd voor mij en zorgde hij ervoor
            dat ik goed op weg was. Ook wanneer hij het druk had, kon ik bij hem
            terecht met vragen of als ik ergens over twijfelde.
            <br />
            <br />
            Hij nam de tijd om dingen uit te leggen op een rustige en duidelijke
            manier. Dat stelde me gerust en hielp me verder. Tegelijk liet hij
            me ook zelfstandig werken, wat ervoor zorgde dat ik veel zelf heb
            kunnen ontdekken en leren.
            <br />
            <br />
            Die combinatie van begeleiding én vrijheid zorgde ervoor dat ik
            zowel inhoudelijk als persoonlijk ben gegroeid. Ik ben dan ook
            dankbaar dat ik kon rekenen op iemand zoals Maarten tijdens mijn
            stage.
          </p>
        </div>
      </section>

      <section className="section_container">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-20">
          <span className="block">Mijn Blogs</span>
          <Link
            href={`./blogs`}
            className="block text-lg md:text-xl text-gray-500 dark:text-gray-400 mt-2 w-28"
          >
            Zie meer {">"}
          </Link>
        </h2>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts
              .slice(0, 3)
              .map((post: Post) => <PostCard key={post?._id} post={post} />)
          ) : (
            <p className="no-results">No blogs found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}
