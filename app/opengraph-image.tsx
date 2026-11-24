import { ImageResponse } from 'next/og';
export const runtime = 'edge';
export const alt = 'Sumit Kumar Pandey | Public Health Strategist';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(
    (<div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80, color: '#FFFFFF', background: 'linear-gradient(135deg,#4F46E5,#3730A3 62%,#0F766E)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 100, height: 100, border: '3px solid #99F6E4', borderRadius: 30, fontSize: 42, fontWeight: 800, marginBottom: 38 }}>SP</div>
      <div style={{ fontSize: 72, fontWeight: 800 }}>Sumit Kumar Pandey</div>
      <div style={{ fontSize: 34, marginTop: 20, color: '#B9F4E1' }}>Public Health Strategist</div>
      <div style={{ fontSize: 24, marginTop: 18 }}>Health Systems Strengthening | Quality Improvement</div>
    </div>), size);
}
