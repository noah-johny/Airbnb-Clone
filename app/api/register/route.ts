import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  // Hashing the password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Creating the user
  const user = await prisma.user.create({
    data: { name, email, hashedPassword },
  });

  return NextResponse.json(user);
}
