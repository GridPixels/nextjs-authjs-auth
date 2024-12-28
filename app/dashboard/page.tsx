import React from "react";
import { auth } from "@/lib/auth";
import SignoutBtn from "@/components/SignoutBtn";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="pt-10 container mx-auto">
      <h1>Hello {session.user?.name}</h1>
      <p>You are logged in</p>
      <pre>{JSON.stringify(session, null, 2)}</pre>

      <SignoutBtn />
    </main>
  );
};

export default Dashboard;
