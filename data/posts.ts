import { Category, Post } from "./types";

export const posts: Post[] = [
  {
    category: Category.automobiles,
    images: ["/images/cars/camry.jpeg", "/images/cars/camry_2.webp"],
    title: "red toyota camry",
    description: "This is a 2015 Toyota Camry",
    location: "Parker, CO",
    startedAt: new Date("2017-06-01"),
  },
];
