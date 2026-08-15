'use client';
import { useState } from 'react';
export default function LessonComplete({lessonId}:{lessonId:string}){const [done,setDone]=useState(false);const [loading,setLoading]=useState(false);async function complete(){setLoading(true);const r=await fetch('/api/progress',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({lessonId,completed:true})});if(r.ok)setDone(true);setLoading(false)}return <button className="btn btn-primary" onClick={complete} disabled={loading||done}>{done?'✓ Lesson completed':loading?'Saving…':'Mark lesson complete'}</button>}
