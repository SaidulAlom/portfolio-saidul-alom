import { NextResponse } from 'next/server';

let metrics = {
  visitors: 0,
  projects: 12,
  experience: '2+',
  skills: 25
};

export async function GET() {
  return NextResponse.json(metrics);
}

export async function POST() {
  metrics.visitors += 1;
  return NextResponse.json(metrics);
}