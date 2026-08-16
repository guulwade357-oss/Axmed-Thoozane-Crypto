import { NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/db';
import { requireUser } from '@/lib/auth';

const schema = z.object({ courseId: z.string().min(1) });

export async function POST(request: Request) {
  try {
    const user = await requireUser();
    const { courseId } = schema.parse(await request.json());
    const course = await db.course.findFirst({ where: { id: courseId, published: true } });
    if (!course) return NextResponse.json({ error: 'Course not found' }, { status: 404 });

    const enrollment = await db.enrollment.upsert({
      where: { userId_courseId: { userId: user.id, courseId } },
      update: { status: 'ACTIVE' },
      create: { userId: user.id, courseId, status: 'ACTIVE' },
    });

    return NextResponse.json({ ok: true, enrollmentId: enrollment.id });
  } catch (error) {
    const message = error instanceof Error && error.message === 'UNAUTHORIZED' ? 'Unauthorized' : 'Unable to enroll';
    return NextResponse.json({ error: message }, { status: message === 'Unauthorized' ? 401 : 400 });
  }
}
