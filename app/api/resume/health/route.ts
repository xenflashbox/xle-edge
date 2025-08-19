export const runtime = 'edge';
export async function GET() {
  return Response.json({ status: 'healthy', ts: Date.now() });
}
