import { NextResponse } from "next/server";


export async function GET(request: Request) {

  // console.log({ method: request.method });

  //Devolver respuesta
  return NextResponse.json({
    method: 'GET',
    count: 100,
  });
}

export async function POST(request: Request) {

  // console.log({ method: request.method });

  //Devolver respuesta
  return NextResponse.json({
    method: 'POST',
    count: 100,
  });
}