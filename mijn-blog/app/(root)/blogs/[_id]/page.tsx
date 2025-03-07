import { formatDate } from "@/app/lib/utils";
import { client } from "@/sanity/lib/client";
import { POST_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import markdownit from "markdown-it";

export default async function BlogPost({ params }: { params: Promise<{ _id: string }> }) {
  const _id = (await params)._id
  const post = await client.fetch(POST_BY_ID_QUERY, { _id });
  const md = markdownit();

  if (!post) return notFound();
  const parsedContent = md.render(post.pitch || "");
  return <>
    <main className="max-w-7xl mx-auto p-8 bg-white rounded-lg shadow-lg">
  {/* Header Section */}
  <section className="bg-sky-100 rounded-lg p-6 shadow-md">
    <p className="text-sm text-sky-600 font-medium">{formatDate(post._createdAt)}</p>
    <h1 className="text-4xl font-extrabold text-sky-800 mt-2">{post.title}</h1>
    <p className="text-lg text-sky-700 mt-1">{post.category}</p>
  </section>

  {/* Content Section */}
  <section className="mt-8">
    {/* Featured Image with Soft Blue Shadow */}
    <div className="mb-6">
      <img
        src={post.image}
        alt={post.title}
        className="w-full max-h-[600]
 rounded-xl shadow-[0px_15px_20px_-10px_rgba(56,189,248,0.4)]"
      />
    </div>

    {/* Blog Content */}
    {parsedContent ? (
      <article
        className="prose max-w-4xl font-serif text-lg text-gray-800 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: parsedContent }}
      />
    ) : (
      <p className="text-gray-600 italic">No details provided</p>
    )}

    {/* Divider with Sky Theme */}
    <hr className="my-6 border-sky-500 p-1 shadow-[0px_10px_15px_-10px_rgba(56,189,248,0.5)]" />
  </section>
</main>

  </>

}
