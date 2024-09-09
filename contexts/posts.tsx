import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import { posts as allPosts } from "@/data/posts";
import { Post } from "@/data/types";

interface PostContextType {
  posts: Post[];
  sortBy: (key?: keyof Post, direction?: "asc" | "desc") => void;
  pushFilter: (id: string, fn: (post: Post) => boolean) => void;
  sortKey: keyof Post | null;
  sortDirection: "asc" | "desc" | null;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export default function PostProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sortKey, setSortKey] = useState<keyof Post | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
    null
  );
  const [filters, setFilters] = useState<{
    [key: string]: (post: Post) => boolean;
  }>({});

  const updatePosts = useMemo(() => {
    const updatedPosts = allPosts.filter((post) => {
      return Object.values(filters).every((fn) => fn(post));
    });

    const key = sortKey;
    if (key) {
      updatedPosts.sort((a, b) => {
        const aValue = a[key]!;
        const bValue = b[key]!;
        if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
        if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
        return 0;
      });
    }

    return updatedPosts;
  }, [sortKey, sortDirection, filters]);

  const pushFilter = useCallback((id: string, fn: (post: Post) => boolean) => {
    setFilters((prev) => ({ ...prev, [id]: fn }));
  }, []);

  const sortBy = useCallback(
    (
      key: keyof Post | null = null,
      direction: "asc" | "desc" | null = null
    ) => {
      setSortKey(key);
      setSortDirection(direction);
    },
    []
  );

  return (
    <PostContext.Provider
      value={{
        posts: updatePosts,
        sortBy,
        pushFilter,
        sortKey,
        sortDirection,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error("usePosts must be used within a PostProvider");
  }
  return context;
}
