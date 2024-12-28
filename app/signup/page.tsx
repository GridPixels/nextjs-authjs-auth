// import { signup } from "@/actions/auth";
"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SignupPage() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    const data = await res.json();

    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>SignUp</CardTitle>
          <CardDescription>SignUp with your email and password</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit}>
            <div className="space-y-2 mt-2">
              <Label htmlFor="name">Name</Label>
              <Input type="text" placeholder="Name" name="name" />
            </div>
            <div className="space-y-2 mt-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" placeholder="Email" name="email" />
            </div>
            <div className="space-y-2 mt-2">
              <Label htmlFor="password">Password</Label>
              <Input type="password" placeholder="Password" name="password" />
            </div>
            <button
              className="w-full mt-5 bg-purple-600 text-white py-2 px-4 rounded-sm hover:bg-purple-700"
              //   formAction={signup}
              type="submit"
            >
              SignUp
            </button>
          </form>
        </CardContent>
        <CardFooter>
          <span className="text-gray-500 px-1">Already have an account?</span>

          <Link
            href="/login"
            className="hover:text-purple-600 underline text-gray-500"
          >
            Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
