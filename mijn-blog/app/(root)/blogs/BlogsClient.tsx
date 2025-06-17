"use client";

import { Post } from "@/types/post";
import { useState, useMemo } from "react";
import PostCard from "@/components/PostCard";

export default function BlogsClient({ posts }: { posts: Post[] }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const allCategories = posts.flatMap((post) =>
      post.category?.split(",").map((cat) => cat.trim()) || []
    );
    return Array.from(new Set(allCategories));
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (!activeCategory) return posts;
    return posts.filter((post) =>
      post.category
        ?.split(",")
        .map((cat) => cat.trim())
        .includes(activeCategory)
    );
  }, [posts, activeCategory]);

  return (
    <>
      {/* Sidebar rechts */}
      <div className="order-2 w-1/4">
        <div className="sticky top-24 bg-white p-4 rounded-xl shadow">
          <h4 className="font-semibold mb-3 text-gray-700">Filter by Category</h4>
          <ul className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() =>
                    setActiveCategory((prev) =>
                      prev === category ? null : category
                    )
                  }
                  className={`text-sm px-3 py-1 rounded-full border ${
                    activeCategory === category
                      ? "bg-sky-600 text-white border-sky-600"
                      : "text-gray-700 border-gray-300 hover:border-sky-400"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Post grid */}
      <ul className="order-1 w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post: Post) => (
            <PostCard key={post._id} post={post} />
          ))
        ) : (
          <p className="no-results col-span-full">No blogs found</p>
        )}
      </ul>
    </>
  );
}
