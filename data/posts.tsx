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
    map_img: "/images/locations/camry.png",
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
    map_img: "/images/locations/camry.png",
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
    map_img: "/images/locations/chs.png",
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
    description: (
      <>
        <p>
          College was an interesting experience for me. It was an unusual
          experience be cause COVID hit 1.5 years into it and I also graduated a
          year early.
        </p>
        <br />
        <p>
          In retrospect, I was too focused on the financial side of college. I
          didn&apos;t want to take any loans out and so I focused almost
          entirely on education. Anything that cost money I avoided and so I
          didn&apos;t get much of an advantage in terms of networking (and it
          heavily influenced my decision to stay in state).
        </p>
        <br />
        <p>
          While I was there, I was a course assistant for Algorithms, Operating
          Systems, and Software Development Methods. This meant I held office
          hours to tutor other undergraduates on the coursework. Most of this
          was done remotely during COVID.
        </p>
        <br />
      </>
    ),
    location: "Boulder, CO",
    map_img: "/images/locations/cu.png",
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
    description: (
      <>
        <p>
          I loved this job. I worked at both Aurora Hills and Saddle Rock golf
          courses in Aurora, CO. It built some good habits like waking up early
          and I also thought it was fun driving all the equipment.
        </p>
        <br />
        <p>
          There was typical work annoyances but overall working outside on
          machinery was great. I also got exposed to golf through this. I
          initially played because it was a free benefit but I grew to enjoy it.
          I also really liked playing the country clubs with my bosses since
          they could get us on for free.
        </p>
      </>
    ),
    location: "Aurora, CO",
    map_img: "/images/locations/golf.png",
    startedAt: new Date("2017-06-10"),
    endedAt: new Date("2021-06-30"),
    title: "golf worker",
  },
  {
    type: "post",
    category: Category.jobs,
    images: ["/images/jobs/canes.JPG"],
    description: (
      <>
        <p>
          Cane&apos;s is still probably my favorite fast food restaurant. I
          applied there before knowing what it was. We just saw the signs that a
          new chicken place was going in and I wanted a job during the school
          year. I still worked some weekends at the golf course but this was
          supposed to be more regular.
        </p>
        <br />
        <p>
          In the end, this was a terrible fit. They continued to schedule me
          closing shifts (which could go till 2am) and that made it difficult to
          balance with school. I also learned a good lesson about pay here. I
          was making pretty much the least there because I hadn&apos;t
          negotiated at all. It was frustrating making $2 less an hour than
          other people in the same position.
        </p>
        <br />
        <p>
          I did like the legal curfew exception. Going to McDonalds or Walmart
          that late riding around in my convertabile are fond memories.
        </p>
      </>
    ),
    location: "Parker, CO",
    startedAt: new Date("2017-08-10"),
    endedAt: new Date("2017-09-30"),
    map_img: "/images/locations/canes.png",
    title: "fry cook @ raising cane's",
  },
  {
    type: "post",
    category: Category.jobs,
    images: ["/images/jobs/schwab.png", "/images/jobs/schwab_2.png"],
    description: (
      <>
        <p>
          This was my first developer experience. I was working on Schwab&apos;s
          design system. They were using Angular and StencilJS to build their
          internal component system and I supported this initiative.
        </p>

        <br />
        <p>
          I learned best practices in component-based architecture as well as
          some of the nitty-gritty of CSS. This was a remote internship during
          COVID. I&apos;m still really thankful to Schwab for continuing the
          program given the uncertainty. I also found their internal culture to
          be sincere and continue to hold my money there to this day.
        </p>
      </>
    ),
    location: "Remote (Lone Tree, CO)",
    map_img: "/images/locations/schwab.png",
    startedAt: new Date("2020-06-01"),
    endedAt: new Date("2020-08-31"),
    title: "intern @ schwab",
  },
  {
    type: "post",
    category: Category.jobs,
    images: ["/images/jobs/kapwing.jpeg", "/images/jobs/kapwing_2.png"],
    map_img: "/images/locations/gg-ave.png",
    description: (
      <>
        <p>
          Kapwing is my first full-time software engineeing experinece.
          It&apos;s hard to sum up this experience because I&apos;ve done so
          much there.
        </p>
        <br />
        <p>
          I started while I was still finishing the last semester of College as
          a Junior engineer. By the summer, I got promoted to an L4 engineer. At
          the time of writing this, I&apos;m an L6 staff engineer and have
          worked on the entire stack there.
        </p>
        <br />
        <p>
          My biggest accomplishments have been shipping large AI features as
          well as making improvements to the performance and reliablity of the
          app. For about 2 years, I was managing teams in both of these areas
          (and peaked at 6 reports). We shipped the dubbing tool and scaled
          performance capabilities by 100x.
        </p>
      </>
    ),
    location: "San Francisco, CA",
    startedAt: new Date("2021-04-12"),
    title: "engineer @ kapwing",
  },
];
