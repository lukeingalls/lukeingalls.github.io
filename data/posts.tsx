import { Category, Post } from "./types";

export const posts: Post[] = [
  {
    type: "post",
    category: Category.automobiles,
    images: ["/images/cars/camry.jpeg", "/images/cars/camry_2.webp"],
    title: "red toyota camry",
    description: (
      <>
        <p>
          This is a 2005 Toyota Camry. It was originally my Dad&apos;s and was
          used by me and my brothers off and on during high school.
        </p>
        <br />
        <p>
          It met it&apos;s end at my hands. I was driving home from work on
          Parker road and came across a buckle in the road. I tried to stop but
          couldn&apos;t get the car to slow down fast enough ended up hitting
          the car in front of me.
        </p>
        <br />
        <p>
          The lady I hit was super nice. I totally rear end her again. As we
          waited for emergency responders to help, another rear end accident
          happened. I felt slightly vindicated because even with the visual sign
          of a previous crash before the road buckle, this dude still started
          another accident.
        </p>
        <br />
        <p>
          Unfortunately for him, he had a suspended license and was arrested. I
          got off with just a ticket.
        </p>
        <br />
      </>
    ),
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
    description: (
      <>
        <p>
          I spent all of the money I earned from working at the golf course to
          buy this EOS. It was fun having a convertible -- especially a hard top
          one. It ended up being one of my favorite past times in high school. I
          would just drive around and enjoy the car. My favorite areas were near
          Elizabeth especially on Delbert road.
        </p>
        <br />
        <p>
          Unfortunately, I ended up losing this car to a hail storm. I was
          driving home from my golf maintanence job and it just started hailing
          on me. I would really not recommend driving through hail like that. I
          was watching the windsheild flex and just hoping that it the hail
          wouldn&apos;t break all the way through that or the moonroof.
          Fortunately, the hail let up pretty quick but the damage done to the
          car exceeded it&apos;s value so the insurance company totalled it out.
        </p>
        <br />
        <p>
          That ended up being a bit of a blessing. I ended up putting all that
          money toward tuition during college. I would&apos;ve enjoyed having
          that car but I think the stress of car expenses wouldn&apos;t have
          been great for me (and I probably wouldn&apos;t have elected to sell
          it otherwise).
        </p>
      </>
    ),
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
    description: (
      <>
        <p>
          I was graduated from Chaparral High School in 2018. I was #10 in the
          class of 2018.
        </p>
        <br />
        <p>
          While at Chaparral I was on the robotics team all 4 years and led it
          in my Senior year. Over that time, we won our division twice and
          competed at the regional competition in Arkansas after each of those
          wins.
        </p>
      </>
    ),
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
  {
    type: "post",
    category: Category.jobs,
    images: ["/images/jobs/kapwing.jpeg", "/images/jobs/kapwing_2.png"],
    description: "This is a 2015 Toyota Camry",
    location: "San Francisco, CA",
    startedAt: new Date("2021-04-12"),
    title: "engineer @ kapwing",
  },
];
