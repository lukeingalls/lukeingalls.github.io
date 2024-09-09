import { useRef } from "react";

export default function useId() {
  return useRef(Math.random());
}
