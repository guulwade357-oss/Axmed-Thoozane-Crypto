import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { createSession } from '@/lib/auth';
const schema=z.object({email:z.email(),password:z.string().min(8)});
export async function POST(req:Request){try{const b=schema.parse(await req.json());const u=await db.user.findUnique({where:{email:b.email.toLowerCase()}});if(!u||!(await bcrypt.compare(b.password,u.passwordHash)))return NextResponse.json({error:'Invalid email or password'},{status:401});const token=await createSession({id:u.id,role:u.role});const r=NextResponse.json({ok:true,role:u.role});r.cookies.set('session',token,{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'lax',path:'/',maxAge:604800});return r}catch{return NextResponse.json({error:'Invalid login data'},{status:400})}}
