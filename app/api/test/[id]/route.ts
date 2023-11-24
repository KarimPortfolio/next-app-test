import { NextResponse } from "next/server";

export async function GET(request: Request, context: {params: {id:number}})
{
    const message = 'access with success.'
    return NextResponse.json({message:message});
}