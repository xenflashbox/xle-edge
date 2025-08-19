export const runtime = 'edge';

const allowedOrigin = process.env.ORIGIN_ALLOWED || '*';
const cors = {
  'Access-Control-Allow-Origin': allowedOrigin,
  'Access-Control-Allow-Methods': 'POST,OPTIONS',
  'Access-Control-Allow-Headers': 'content-type, authorization'
};

export async function OPTIONS() {
  return new Response('OK', { headers: cors });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || !body.user_id || !body.resume_text) {
    return Response.json({ error: 'Missing fields' }, { status: 400, headers: cors });
  }
  // stub: generate a fake submission_id so we can wire CDC later
  const submission_id = crypto.randomUUID();
  return Response.json({ submission_id, accepted: true }, { headers: cors });
}
