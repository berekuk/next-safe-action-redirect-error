"use server";

import { createSafeActionClient } from "next-safe-action";
import { redirect } from "next/navigation";
import { z } from "zod";

const actionClient = createSafeActionClient();

const schema = z.enum(["FAIL", "REDIRECT"]);

export const act = actionClient
  .schema(schema)
  .action(async ({ parsedInput: command }) => {
    if (command === "FAIL") {
      throw new Error("FAIL");
    }
    if (command === "REDIRECT") {
      redirect("/success");
    }
  });
