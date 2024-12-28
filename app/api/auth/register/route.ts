import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  const { email, password, name } = body;

  const alreadyExists = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  const hashedPassword = await bcrypt.hash(password, 10);

  if (alreadyExists) {
    throw new Error("User already exists");
  }

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  if (!user) {
    throw new Error("User not created");
  }

  return NextResponse.json(
    {
      message: "User created successfully",
    },
    {
      status: 201,
    }
  );
};
