import { NextRequest } from "next/server";

// NOTE: Form & call connections are temporarily disabled.
// Re-enable by restoring the proxy implementation pointing to:
// const TARGET_ORIGIN = "https://backend.leadconnectorhq.com";

const DISABLED_RESPONSE = new Response(
  JSON.stringify({ ok: false, message: "Forms are currently disabled." }),
  {
    status: 503,
    headers: {
      "content-type": "application/json",
      "access-control-allow-origin": "*",
    },
  },
);

export async function GET(_request: NextRequest) {
  return DISABLED_RESPONSE.clone();
}

export async function POST(_request: NextRequest) {
  return DISABLED_RESPONSE.clone();
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "GET,POST,OPTIONS",
      "access-control-allow-headers": "*",
    },
  });
}
