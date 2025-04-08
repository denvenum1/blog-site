import { formatDate } from "@/app/lib/utils";
import { Post } from "@/sanity/types";
import Link from "next/link";
import Image from "next/image";

type PostWithImageUrl = Post & {
  image?: {
    asset?: {
      url?: string;
    };
  };
};

export default function PostCard({ post }: { post: PostWithImageUrl }) {
  const { date, _id, title, pitch, image, category } = post;

  return (
    <li className="transition duration-300 transform hover:scale-[1.01]">
      <Link href={`/blogs/${_id}`} className="block h-full">
        <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-[0_8px_30px_rgba(56,189,248,0.5)] transition-shadow duration-300">
          {image?.asset?.url && (
            <div className="relative h-48 w-full">
              <Image
                src={image.asset.url}
                alt={`${title}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
            </div>
          )}

          <div className="p-5 flex flex-col justify-between flex-1">
            <div className="mb-3">
              <p className="text-xs uppercase text-sky-600 font-semibold mb-1">
                {date ? formatDate(date) : "Geen datum"}
              </p>
              <h3 className="text-lg font-bold text-gray-800 leading-snug line-clamp-2">{title}</h3>
              <p className="text-sm text-gray-500 italic">{category}</p>
            </div>
            <p className="text-sm text-gray-700 line-clamp-3">{pitch}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
