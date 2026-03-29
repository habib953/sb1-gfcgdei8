import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const lead = await prisma.lead.create({
    data: {
      showroomId: body.showroomId,
      carId: body.carId,
      fullName: body.fullName,
      phone: body.phone,
      email: body.email,
      message: body.message,
      locale: body.locale,
    },
  });

  return NextResponse.json(lead, { status: 201 });
}
