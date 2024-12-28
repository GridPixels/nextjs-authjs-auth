"use client";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

const SignoutBtn = () => {
  return (
    <Button
      className="mt-4"
      onClick={() => signOut()}
      variant="destructive"
      size={"lg"}
    >
      Sign Out
    </Button>
  );
};

export default SignoutBtn;
