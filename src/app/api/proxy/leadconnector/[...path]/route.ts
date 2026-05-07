import { NextResponse } from 'next/server';

// LeadConnector proxy is intentionally disabled.
// Re-enable when production GHL keys are ready.
export async function GET() {
  return NextResponse.json({ message: 'Service temporarily unavailable' }, { status: 503 });
}
export async function POST() {
  return NextResponse.json({ message: 'Service temporarily unavailable' }, { status: 503 });
}
