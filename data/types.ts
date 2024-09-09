export enum Category {
  education = "education",
  // events = "events",
  jobs = "jobs",
  // services = "services",
  // general = "general",
  // realestate = "realestate",
  // community = "community",
  // lostandfound = "lostandfound",
  // personals = "personals",
  contact = "contact",
  // housing = "housing",
  automobiles = "automobiles",
}

export type Post =
  | {
      title: string;
      location: string;
      images: string[];
      startedAt: Date;
      endedAt?: Date;
      category: Category;
    } & (
      | {
          type: "post";
          description: React.ReactNode;
        }
      | {
          type: "link";
          url: string;
        }
    );
