import React from "react";
import { auth } from "@/lib/auth";
import SignoutBtn from "@/components/SignoutBtn";
import { redirect } from "next/navigation";
import Image from "next/image";

const Dashboard = async () => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="pt-10 container mx-auto">
      {session.user?.image && (
        <div className="bg-green-200 w-20 h-20 rounded-full flex justify-center items-center">
          <Image
            src={session.user?.image as string}
            alt={session.user?.name as string}
            width={50}
            height={50}
          />
        </div>
      )}
      <h1 className="pb-1 text-2xl">Hello {session.user?.name}</h1>
      <p>You are logged in</p>

      <SignoutBtn />
    </main>
  );
};

export default Dashboard;
