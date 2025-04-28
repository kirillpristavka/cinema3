import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ movieId?: string }> }
) {
    try {
        const movieId = (await params).movieId;

        const movie = await prisma.movie.findUnique({
            where: {
                id: movieId
            }
        });

        if(!movie) {
            throw new Error('Invalid ID');
        }

        return NextResponse.json(movie);
    } catch (error: any) {
        console.log(error);
        return new NextResponse('Error', { status: 400 });
    }
}