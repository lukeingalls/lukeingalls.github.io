import { Category, Post } from "./types";

export const posts: Post[] = [
  {
    type: "post",
    category: Category.automobiles,
    images: ["/images/cars/camry.jpeg", "/images/cars/camry_2.webp"],
    title: "red toyota camry",
    description: "This is a 2015 Toyota Camry",
    location: "Parker, CO",
    startedAt: new Date("2018-07-10"),
    endedAt: new Date("2019-08-03"),
  },
  {
    type: "post",
    category: Category.automobiles,
    images: [
      "/images/cars/eos.jpeg",
      "/images/cars/eos_2.jpeg",
      "/images/cars/eos_3.jpeg",
    ],
    title: "2008 volkswagen eos",
    description: "This is a 2015 Toyota Camry",
    location: "Parker, CO",
    startedAt: new Date("2017-07-30"),
    endedAt: new Date("2018-07-04"),
  },
  {
    type: "post",
    category: Category.education,
    images: [
      "/images/education/chap.jpeg",
      "/images/education/chap_2.JPG",
      "/images/education/chap_3.jpg",
      "/images/education/chap_4.JPG",
      "/images/education/chap_5.JPG",
      "/images/education/chap_6.JPG",
      "/images/education/chap_7.JPG",
      "/images/education/chap_8.JPG",
    ],
    title: "Chaparral High School",
    description: "This is a 2015 Toyota Camry",
    location: "Parker, CO",
    startedAt: new Date("2014-08-20"),
    endedAt: new Date("2018-05-24"),
  },
  {
    type: "post",
    category: Category.education,
    images: [
      "/images/education/cu_2.jpg",
      "/images/education/cu.jpg",
      "/images/education/cu_3.jpg",
      "/images/education/cu_4.jpg",
      "/images/education/cu_5.jpg",
      "/images/education/cu_6.jpg",
    ],
    title: "BS Computer Science",
    description: "This is a 2015 Toyota Camry",
    location: "Boulder, CO",
    startedAt: new Date("2018-08-20"),
    endedAt: new Date("2021-05-06"),
  },
  {
    type: "link",
    url: "https://www.linkedin.com/in/luke-ingalls/",
    category: Category.contact,
    images: ["/images/linkedin.webp"],
    location: "linkedin.com",
    startedAt: new Date("2019-04-01"),
    title: "linkedin account 😈",
  },
  {
    type: "link",
    url: "https://github.com/lukeingalls",
    category: Category.contact,
    images: ["/images/github.png"],
    location: "localhost:3000",
    startedAt: new Date("2018-12-01"),
    title: "coding place 🧘‍♂️",
  },
  {
    type: "link",
    url: "https://x.com/luke_n_ingalls",
    category: Category.contact,
    images: [
      "/images/twitter.png",
      "/images/twitter_2.png",
      "/images/twitter_3.png",
    ],
    location: "twitter.com",
    startedAt: new Date("2021-04-23"),
    title: "twitter account 🐦",
  },
  {
    type: "post",
    category: Category.jobs,
    images: [
      "/images/jobs/golf.png",
      "/images/jobs/golf_1.JPG",
      "/images/jobs/golf_2.png",
      "/images/jobs/golf_3.png",
      "/images/jobs/golf_4.png",
      "/images/jobs/golf_5.jpg",
      "/images/jobs/golf_6.png",
    ],
    description: "This is a 2015 Toyota Camry",
    location: "Aurora, CO",
    startedAt: new Date("2017-06-10"),
    endedAt: new Date("2021-06-30"),
    title: "golf worker",
  },
  {
    type: "post",
    category: Category.jobs,
    images: ["/images/jobs/canes.JPG"],
    description: "This is a 2015 Toyota Camry",
    location: "Parker, CO",
    startedAt: new Date("2017-08-10"),
    endedAt: new Date("2017-09-30"),
    title: "fry cook @ raising cane's",
  },
  {
    type: "post",
    category: Category.jobs,
    images: ["/images/jobs/schwab.png", "/images/jobs/schwab_2.png"],
    description: "This is a 2015 Toyota Camry",
    location: "Lone Tree, CO",
    startedAt: new Date("2020-06-01"),
    endedAt: new Date("2020-08-31"),
    title: "intern @ schwab",
  },
];
