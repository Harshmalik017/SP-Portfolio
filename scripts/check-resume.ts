import { statSync } from 'node:fs';
try {
  const s = statSync('public/Sumit_Kumar_Pandey_CV.pdf');
  console.log(`Resume PDF OK (${Math.round(s.size / 1024)} KB). Reminder: update resumeUpdated in data/resume.ts when you replace it.`);
} catch {
  console.error('Missing public/Sumit_Kumar_Pandey_CV.pdf. The download button needs it.'); process.exit(1);
}
