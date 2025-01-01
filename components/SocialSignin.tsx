"use client";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export default function SocialSignin() {
  return (
    <div className="mb-5 flex flex-col gap-3">
      <Button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => signIn("github")}
      >
        Github
      </Button>
      <Button onClick={() => signIn("google")}>Google</Button>
    </div>
  );
}
