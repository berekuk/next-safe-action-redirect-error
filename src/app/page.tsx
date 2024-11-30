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
      <p>{`Press "fail"; check console; press "redirect"; see how there's a second error being logged on redirect.`}</p>
      <div>
        <button onClick={() => execute("FAIL")}>fail</button>
      </div>
      <div>
        <button onClick={() => execute("REDIRECT")}>redirect</button>
      </div>
    </div>
  );
}
