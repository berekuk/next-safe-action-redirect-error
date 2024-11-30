"use client";
import { useAction } from "next-safe-action/hooks";

import { act } from "./action";

export default function Home() {
  const { execute } = useAction(act, {
    onError: () => {
      console.log("ERROR");
    },
  });

  return (
    <div>
      <button onClick={() => execute("FAIL")}>fail</button>
      <button onClick={() => execute("REDIRECT")}>redirect</button>
    </div>
  );
}
