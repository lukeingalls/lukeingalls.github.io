import { posts } from "@/data/posts";
import { Category } from "@/data/types";
import displayTimeSince from "@/utils/displayTimeSince";
import { Fragment, useMemo, useState } from "react";

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
      {/* <div className="flex items-center space-x-4 pr-4">
        <button className="text-green-700 hover:text-green-900">post</button>
        <button className="text-gray-700 hover:text-black">acct</button>
      </div> */}
    </header>
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
          <h2 className="text-blue-700 text-xl font-semibold">for sale</h2>
          <button
            className={`${
              isOpen ? "" : "absolute left-[210px]"
            } p-1 rounded-full`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "❮" : "❯"}
          </button>
        </div>
        <div className="text-blue-600 text-sm grid grid-cols-[1fr,auto,auto] gap-2">
          {categories.map((category) => (
            <Fragment key={category.name}>
              <div>{category.name}</div>
              <div>{category.count}</div>
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600 justify-self-end"
              />
            </Fragment>
          ))}
        </div>
      </aside>
    </div>
  );
}

import React from "react";

interface ItemCardProps {
  images: string[]; // Array of image URLs for the gallery
  title: string;
  date: string;
  city: string;
}

function ItemCard({ images, title, date, city }: ItemCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  return (
    <div className="border rounded shadow-md hover:shadow-lg transition-shadow aspect-square relative">
      {/* Image Gallery */}
      <div className="relative w-full h-full">
        <img
          src={images[currentImageIndex]}
          alt={title}
          className="w-full h-full object-cover rounded"
        />
        {images.length > 1 && (
          <>
            <button
              className="absolute left-2 top-[40%] transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
              onClick={() => {
                setCurrentImageIndex((prevIndex) =>
                  prevIndex === 0 ? images.length - 1 : prevIndex - 1
                );
              }}
            >
              ❮
            </button>
            <button
              className="absolute right-2 top-[40%] transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
              onClick={() => {
                setCurrentImageIndex((prevIndex) =>
                  prevIndex === images.length - 1 ? 0 : prevIndex + 1
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
          {title}
        </h3>
        <div className="text-sm text-gray-500 truncate">
          <span>{date}</span> &middot; <span>{city}</span>
        </div>
      </div>
    </div>
  );
}

const items = [
  {
    images: ["/path-to-image1.jpg"], // Replace with your actual image paths
    title: "2024 TESLA MODEL 3 PERFORMANCE",
    date: "27 mins ago",
    city: "city of san francisco",
  },
  {
    images: ["/path-to-image2.jpg"], // Replace with your actual image paths
    title: "2023 HONDA ODYSSEY ELITE",
    date: "43 mins ago",
    city: "Rancho Cordova",
  },
  {
    images: ["/path-to-image3.jpg"], // Replace with your actual image paths
    title: "Freightliner Cascadia",
    date: "45 mins ago",
    city: "Woodbridge",
  },
  // Add more items as needed
];

function SearchBar() {
  return (
    <div className="sticky top-0 bg-white border-b border-gray-300 py-4 z-40">
      <div className="flex items-center gap-2 h-[45px]">
        <input
          type="text"
          placeholder="search for sale"
          className="w-full border border-gray-300 rounded p-2"
        />
        <button className="bg-gray-100 text-black p-2 border border-gray-300 rounded w-[45px]">
          🔍
        </button>
      </div>
      <div className="flex mt-2 gap-2">
        <button className="bg-gray-200 p-2 rounded">price</button>
        <button className="bg-gray-200 p-2 rounded">condition</button>
        <button className="bg-gray-200 p-2 rounded">by dealer</button>
      </div>
    </div>
  );
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

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
            {items.map((item, index) => (
              <ItemCard
                key={index}
                images={item.images}
                title={item.title}
                date={item.date}
                city={item.city}
              />
            ))}
            {posts.map((post, index) => (
              <ItemCard
                key={index}
                images={post.images}
                title={post.title}
                date={displayTimeSince(post.startedAt)}
                city={post.location}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
