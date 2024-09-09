import { posts } from "@/data/posts";
import postTitleToSlug from "@/utils/postTitleToSlug";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { post: postTitleToSlug(post) },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { post: string } }) {
  const post = posts.find((post) => postTitleToSlug(post) === params.post);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { title: post.title },
  };
}

export default function PostPage({ title }: { title: string }) {
  const router = useRouter();
  // need the route param
  const post = posts.find((post) => post.title === title);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  console.log("selectedImageIdx", selectedImageIdx);

  useEffect(function componentDidMount() {
    const listener = function (e: MouseEvent) {
      const thumbnailImages = document.getElementById("thumbnail-images");
      if (!thumbnailImages) return;
      const rect = thumbnailImages.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.left + rect.width &&
        e.clientY >= rect.top &&
        e.clientY <= rect.top + rect.height
      ) {
        return;
      }
      // setSelectedImageIdx(0);
    };
    window.addEventListener("mousemove", listener);
    return () => {
      window.removeEventListener("mousemove", listener);
    };
  }, []);

  if (!post) {
    // redirect to 404
    return router.push("/404");
  }

  if (post.type === "link" && typeof window !== "undefined") {
    window.location.href = post.url;
    return null;
  }

  if (post.type === "link") {
    return (
      <div>
        <h1>{post.title}</h1>
        <a href={post.url}>{post.url}</a>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="text-sm text-gray-500 mb-4 w-full bg-gray-100 h-[45px] flex items-center border-b border-gray-300 gap-2 px-4">
        <Link
          href="/"
          className="text-2xl font-bold text-purple-700 bg-white w-8 text-center rounded-full"
        >
          LI
        </Link>
        &nbsp;
        <div className="text-gray-800">SF bay area</div> &gt;
        <div className="text-gray-800">for sale by dealer</div> &gt;
        <Link href="/" className="text-blue-600">
          about luke
        </Link>
      </div>
      <div className="max-w-6xl mx-auto p-6">
        {/* Title and Image Gallery */}
        <div className="flex">
          <div className="w-2/3 px-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 font-serif">
              {post.title}
            </h1>
            <div>
              {/* Main Image */}
              <img
                src={post.images[selectedImageIdx]}
                alt={post.title}
                className="w-[600px] h-[400px] object-contain"
                width={600}
                height={400}
              />
            </div>

            {/* Thumbnail Images */}
            <div
              id="thumbnail-images"
              className="flex overflow-x-auto mb-4 pl-2"
            >
              {post.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${post.title}-${index}`}
                  width={50}
                  height={50}
                  onMouseEnter={() => {
                    console.log("mouse enter");
                    setSelectedImageIdx(index);
                  }}
                  onMouseMove={() => {
                    console.log("mouse move");
                    setSelectedImageIdx(index);
                  }}
                  className={`shadow cursor-pointer hover:opacity-80 border-2 object-cover ml-[-2px] w-[50px] h-[50px] ${
                    selectedImageIdx === index
                      ? "border-orange-500 z-10"
                      : "border-white"
                  }`}
                />
              ))}
            </div>

            {/* Description */}
            <div className="text-gray-800 text-base font-serif">
              {post.description}
            </div>
          </div>

          {/* Post Details */}
          <div className="w-1/3 pl-4">
            <div className="border border-gray-300 p-4 rounded mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {post.category}
              </h2>
              <ul className="mt-4 text-sm text-gray-600">
                <li>
                  <strong>Location:</strong> {post.location}
                </li>
                <li>
                  <strong>Started:</strong>{" "}
                  {post.startedAt.toLocaleDateString()}
                </li>
                {post.endedAt && (
                  <li>
                    <strong>Finished:</strong>{" "}
                    {post.endedAt.toLocaleDateString()}
                  </li>
                )}
              </ul>
              <Link href="/" className="text-blue-600 mt-2 block">
                more posts by this user
              </Link>
            </div>

            {/* Map Placeholder */}
            <div className="border border-gray-300 p-4 rounded mb-4">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                Map Placeholder
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 mt-8 p-4 text-xs mt-8">
          Avoid scams, remember: if it sounds too good to be true, it probably
          is—unless it’s my work.
        </div>
      </div>
    </div>
  );
}
