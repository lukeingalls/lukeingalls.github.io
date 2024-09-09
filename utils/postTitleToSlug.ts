import { Post } from "@/data/types";

export default function postTitleToSlug(post: Post) {
  return post.title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
