'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EnrollButton({ courseId }: { courseId: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function enroll() {
    setLoading(true);
    setMessage('');
    try {
      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId }),
      });
      const data = await response.json();
      if (response.status === 401) return router.push('/login');
      if (!response.ok) throw new Error(data.error || 'Unable to enroll');
      router.push('/dashboard');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Unable to enroll');
    } finally {
      setLoading(false);
    }
  }

  return <div style={{display:'grid',gap:8,justifyItems:'start'}}><button className="btn btn-primary" onClick={enroll} disabled={loading}>{loading ? 'Enrolling…' : 'Enroll in this course →'}</button>{message && <small style={{color:'#ff9b9b'}}>{message}</small>}</div>;
}
