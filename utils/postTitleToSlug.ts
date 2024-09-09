import { Post } from "@/data/types";

export default function postTitleToSlug(post: Post) {
  return `/p/${post.title.toLowerCase().replace(/ /g, "-")}`;
}
