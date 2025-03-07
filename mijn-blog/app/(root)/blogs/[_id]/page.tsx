/* eslint-disable @next/next/no-img-element */
import { formatDate } from "@/app/lib/utils";
import { client } from "@/sanity/lib/client";
import { POST_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import markdownit from "markdown-it";
import Image from "next/image"

export default async function BlogPost({ params }: { params: Promise<{ _id: string }> }) {
  const _id = (await params)._id
  const post = await client.fetch(POST_BY_ID_QUERY, { _id });
  const md = markdownit();

  if (!post) return notFound();
  const parsedContent = md.render(post.pitch || "");
  return <>
    <main className="max-w-7xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <section className="bg-sky-100 rounded-lg p-6 shadow-md">
        <p className="text-sm text-sky-600 font-medium">{formatDate(post._createdAt)}</p>
        <h1 className="text-4xl font-extrabold text-sky-800 mt-2">{post.title}</h1>
        <p className="text-lg text-sky-700 mt-1">{post.category}</p>
      </section>
      <section className="mt-8">
        <div className="mb-6 flex justify-center">
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={800}
            className="rounded-xl shadow-lg scale-105"
            unoptimized={true}
          />
        </div>

        {parsedContent ? (
          <article
            className="prose max-w-4xl font-serif text-lg text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: parsedContent }}
          />
        ) : (
          <p className="text-gray-600 italic">No details provided</p>
        )}

        <hr className="my-6 border-sky-500 p-1 shadow-[0px_10px_15px_-10px_rgba(56,189,248,0.5)]" />
      </section>
    </main>

  </>

}
