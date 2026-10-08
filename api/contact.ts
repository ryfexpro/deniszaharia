type Payload={name?:string;phone?:string;email?:string;projectType?:string;message?:string;website?:string};
const out=(body:unknown,status=200)=>new Response(JSON.stringify(body),{status,headers:{"content-type":"application/json"}});
const esc=(s:string)=>s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]||c));
export default async function handler(req:Request){
 if(req.method!=="POST")return out({error:"Method not allowed"},405);
 if(!process.env.RESEND_API_KEY)return out({error:"Email not configured"},500);
 let p:Payload;try{p=await req.json()}catch{return out({error:"Invalid JSON"},400)}
 if(p.website)return out({ok:true});
 const name=(p.name||"").trim().slice(0,120),phone=(p.phone||"").trim().slice(0,80),email=(p.email||"").trim().slice(0,180),project=(p.projectType||"Not selected").trim().slice(0,120),message=(p.message||"").trim().slice(0,5000);
 if(!name||!phone||!email||!message)return out({error:"Missing fields"},400);
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return out({error:"Invalid email"},400);
 const r=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,"Content-Type":"application/json"},body:JSON.stringify({from:process.env.CONTACT_FROM_EMAIL||"Denis Zaharia Website <onboarding@resend.dev>",to:["ryfexpro@gmail.com"],reply_to:email,subject:`BUILD WITH ME — ${name}`,html:`<h2>New BUILD WITH ME request</h2><p><b>Name:</b> ${esc(name)}</p><p><b>Phone / WhatsApp:</b> ${esc(phone)}</p><p><b>Email:</b> ${esc(email)}</p><p><b>Project:</b> ${esc(project)}</p><p><b>Message:</b><br>${esc(message).replace(/\n/g,"<br>")}</p>`})});
 if(!r.ok){console.error(await r.text());return out({error:"Delivery failed"},502)}
 return out({ok:true});
}
