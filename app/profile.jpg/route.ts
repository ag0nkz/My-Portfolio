export const runtime = 'edge';

export function GET() {
  const svg = `
    <svg width="1200" height="1500" viewBox="0 0 1200 1500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="1500" fill="#020617"/>
      <rect x="100" y="100" width="1000" height="1300" rx="96" fill="#0F172A" stroke="rgba(45,212,191,0.28)"/>
      <circle cx="600" cy="560" r="220" fill="rgba(45,212,191,0.18)" stroke="rgba(45,212,191,0.45)"/>
      <rect x="410" y="870" width="380" height="18" rx="9" fill="#E2E8F0"/>
      <rect x="470" y="920" width="260" height="12" rx="6" fill="#94A3B8"/>
      <text x="600" y="1080" text-anchor="middle" fill="#E2E8F0" font-size="72" font-family="sans-serif" font-weight="700">Emil Molina.</text>
      <text x="600" y="1150" text-anchor="middle" fill="#94A3B8" font-size="30" font-family="sans-serif">Aspiring AI Engineer &amp; Software Developer</text>
    </svg>
  `;

  return new Response(svg.trim(), {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}