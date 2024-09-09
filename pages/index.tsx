import { usePosts } from "@/contexts/posts";
import { posts } from "@/data/posts";
import { Category, Post } from "@/data/types";
import displayTimeSince from "@/utils/displayTimeSince";
import postTitleToSlug from "@/utils/postTitleToSlug";
import { Fragment, useEffect, useId, useMemo, useState } from "react";

function Header() {
  return (
    <header className="fixed top-0 w-full bg-gray-100 h-[45px] flex justify-between items-center border-b border-gray-300 z-50">
      <div className="flex items-center space-x-4 pl-4">
        <div className="text-2xl font-bold text-purple-700">LI</div>
        <select className="bg-white border border-gray-300 rounded-md p-1">
          <option>SF bay area</option>
        </select>
        <select className="bg-white border border-gray-300 rounded-md p-1">
          <option>san francisco</option>
        </select>
        <select className="bg-white border border-gray-300 rounded-md p-1">
          <option>for sale</option>
          <option>all</option>
        </select>
      </div>
      <div className="flex items-center space-x-4 pr-4">
        <button
          className="text-green-700 hover:text-green-900"
          onClick={() => {
            navigator.share({
              url: window.location.href,
            });
          }}
        >
          share
        </button>
        {/* <button className="text-gray-700 hover:text-black">acct</button> */}
      </div>
    </header>
  );
}

function CategoryItem({
  category,
  count,
}: {
  category: Category;
  count: number;
}) {
  const { pushFilter } = usePosts();
  const id = useId();

  useEffect(() => {
    return () => {
      pushFilter(id, () => true);
    };
  }, [pushFilter, id]);

  return (
    <Fragment>
      <div
        onClick={() => document.getElementById(`checkbox-${category}`)?.click()}
      >
        {category}
      </div>
      <div
        onClick={() => document.getElementById(`checkbox-${category}`)?.click()}
      >
        {count}
      </div>
      <input
        id={`checkbox-${category}`}
        type="checkbox"
        className="form-checkbox h-4 w-4 text-blue-600 justify-self-end cursor-pointer"
        defaultChecked
        onChange={(el) => {
          if (!el.target.checked) {
            pushFilter(id, (post) => post.category !== category);
          } else {
            pushFilter(id, () => true);
          }
        }}
      />
    </Fragment>
  );
}

function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const categories = useMemo(() => {
    return Object.values(Category).map((category) => ({
      name: category,
      count: posts.filter((post) => post.category === category).length,
    }));
  }, []);

  return (
    <div className="relative">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-[45px] h-[calc(100vh-45px)] bg-gray-100 border-r border-gray-300 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-[200px]"
        } w-[200px] p-4 z-50`}
      >
        {/* Arrow Toggle Button */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-blue-700 text-xl font-semibold">About Luke</h2>
          <button
            className={`${
              isOpen ? "" : "absolute left-[210px]"
            } p-1 rounded-full`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "❮" : "❯"}
          </button>
        </div>
        <div className="text-blue-600 text-sm grid grid-cols-[1fr,auto,auto] gap-2 cursor-pointer">
          {categories.map((category) => (
            <CategoryItem
              key={category.name}
              category={category.name}
              count={category.count}
            />
          ))}
        </div>
      </aside>
    </div>
  );
}

import React from "react";

interface ItemCardProps {
  post: Post;
}

function ItemCard({ post }: ItemCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const date = displayTimeSince(post.endedAt || post.startedAt);
  return (
    <a
      className="border rounded shadow-md hover:shadow-lg transition-shadow aspect-square relative"
      href={"url" in post ? post.url : postTitleToSlug(post)}
      target={post.type === "link" ? "_blank" : undefined}
    >
      {/* Image Gallery */}
      <div className="relative w-full h-full group">
        <img
          loading="lazy"
          src={post.images[currentImageIndex]}
          alt={post.title}
          className="w-full h-full object-cover rounded"
        />
        {post.images.length > 1 && (
          <>
            <button
              className="absolute top-[35%] transform -translate-y-1/2 bg-white bg-opacity-50 p-2 hidden group-hover:block text-2xl rounded-r"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentImageIndex((prevIndex) =>
                  prevIndex === 0 ? post.images.length - 1 : prevIndex - 1
                );
              }}
            >
              ❮
            </button>
            <button
              className="absolute right-0 top-[35%] transform -translate-y-1/2 bg-white bg-opacity-50 p-2 hidden group-hover:block text-2xl rounded-l"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentImageIndex((prevIndex) =>
                  prevIndex === post.images.length - 1 ? 0 : prevIndex + 1
                );
              }}
            >
              ❯
            </button>
          </>
        )}
      </div>

      {/* Item Information */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white">
        <h3 className="text-blue-700 font-semibold text-lg mb-2 truncate">
          {post.title}
        </h3>
        <div className="text-sm text-gray-500 truncate">
          <span>{date}</span> &middot; <span>{post.location}</span>
        </div>
      </div>
    </a>
  );
}

function SearchBar() {
  const { sortBy, sortKey, sortDirection, pushFilter } = usePosts();
  const id = useId();

  const handleSort = (key: keyof Post) => {
    if (sortKey !== key) {
      sortBy(key, "asc");
    } else if (sortDirection === "asc") {
      sortBy(key, "desc");
    } else {
      sortBy();
    }
  };

  const getSortIcon = (key: keyof Post) => {
    if (sortKey !== key) return "";
    return sortDirection === "asc" ? "↑" : "↓";
  };

  useEffect(() => {
    return () => {
      pushFilter(id, () => true);
      sortBy();
    };
  }, [sortBy, pushFilter, id]);

  return (
    <div className="sticky top-[45px] bg-white border-b border-gray-300 py-4 z-40">
      <div className="flex items-center gap-2 h-[45px]">
        <input
          type="text"
          placeholder="search for posts"
          className="w-full border border-gray-300 rounded p-2"
        />
        <button className="bg-gray-100 text-black p-2 border border-gray-300 rounded w-[45px]">
          🔍
        </button>
      </div>
      <div className="flex mt-2 gap-2">
        <button
          className={`bg-gray-200 p-2 rounded ${
            sortKey === "startedAt" ? "font-bold" : ""
          }`}
          onClick={() => handleSort("startedAt")}
        >
          started {getSortIcon("startedAt")}
        </button>
        <button
          className={`bg-gray-200 p-2 rounded ${
            sortKey === "title" ? "font-bold" : ""
          }`}
          onClick={() => handleSort("title")}
        >
          title {getSortIcon("title")}
        </button>
        <button
          className={`bg-gray-200 p-2 rounded ${
            sortKey === "type" ? "font-bold" : ""
          }`}
          onClick={() => handleSort("type")}
        >
          type {getSortIcon("type")}
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const { posts } = usePosts();

  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <main
          className={`flex-1 p-4 mt-[45px] transition-all duration-300 ease-in-out ${
            isOpen ? "ml-[216px]" : "ml-[32px]"
          }`}
        >
          {/* Main content goes here */}
          <SearchBar />
          <div className="grid gap-4 py-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
            {posts.map((post) => (
              <ItemCard key={post.title} post={post} />
            ))}
            {posts.length === 0 && <div>No posts match your search</div>}
          </div>
        </main>
      </div>
    </div>
  );
}
