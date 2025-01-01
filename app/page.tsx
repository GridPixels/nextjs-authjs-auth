import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-10 container mx-auto flex flex-col items-center">
      <h1 className="pb-5">
        Next.js Authentication with NextAuth.js and Prisma
      </h1>
      <div className="flex gap-5">
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild>
          <Link href="/signup">Signup</Link>
        </Button>
      </div>
    </main>
  );
}
