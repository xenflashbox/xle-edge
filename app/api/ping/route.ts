export const runtime = 'edge';
export async function GET() {
  return Response.json({ ok: true, service: 'xle-edge', ts: Date.now() });
}
