"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { redirect } from "next/navigation";

export default function LoginForm() {
  const session = useSession();
  if (session.status === "authenticated") {
    redirect("/dashboard");
  }

  const credentialsAction = (formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
    signIn("credentials", data);
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login with your email and password</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form action={credentialsAction}>
            <div className="space-y-2">
              <Label htmlFor="password">Email</Label>
              <Input type="email" placeholder="Email" name="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input type="password" placeholder="Password" name="password" />
            </div>
            <button
              className="w-full mt-5 bg-purple-600 text-white py-2 px-4 rounded-sm hover:bg-purple-700"
              type="submit"
            >
              SignUp
            </button>
          </form>
        </CardContent>
        <CardFooter>
          <span className="text-gray-500 px-1">
            Don&apos;t have an account?
          </span>

          <Link
            href="/signup"
            className="hover:text-purple-600 underline text-gray-500"
          >
            SignUp
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
