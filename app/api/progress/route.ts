import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { requireUser } from '@/lib/auth';
import { z } from 'zod';

const schema = z.object({ lessonId: z.string().min(1), completed: z.boolean().default(true) });

export async function POST(req: Request) {
  try {
    const user = await requireUser();
    const body = schema.parse(await req.json());
    const progress = await db.lessonProgress.upsert({
      where: { userId_lessonId: { userId: user.id, lessonId: body.lessonId } },
      update: { completed: body.completed, completedAt: body.completed ? new Date() : null },
      create: { userId: user.id, lessonId: body.lessonId, completed: body.completed, completedAt: body.completed ? new Date() : null }
    });
    return NextResponse.json({ ok: true, progress });
  } catch (error) {
    const message = error instanceof Error && error.message === 'UNAUTHORIZED' ? 'Unauthorized' : 'Unable to save progress';
    return NextResponse.json({ error: message }, { status: message === 'Unauthorized' ? 401 : 400 });
  }
}
