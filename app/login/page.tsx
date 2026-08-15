'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Login(){
 const [msg,setMsg]=useState('');
 async function submit(e:React.FormEvent){e.preventDefault();setMsg('Authentication backend is ready to be connected to your database.');}
 return <main className="auth"><div className="panel"><Link className="brand" href="/"><span className="logo">TC</span><span>THOOZANE CRYPTO<small>TRADER • ACADEMY</small></span></Link><h1>Student Login</h1><p className="section-intro">Enter your academy account to continue learning.</p><form className="form" onSubmit={submit}><label>Email<input type="email" placeholder="you@example.com" required/></label><label>Password<input type="password" placeholder="••••••••" required/></label><button className="btn btn-primary" type="submit">Sign in →</button>{msg&&<p style={{color:'var(--gold)'}}>{msg}</p>}</form><p style={{color:'var(--muted)',fontSize:14}}>New to the academy? <Link href="/register" style={{color:'var(--gold)'}}>Create an account</Link></p><Link href="/" style={{color:'var(--muted)',fontSize:13}}>← Back to website</Link></div></main>
}
