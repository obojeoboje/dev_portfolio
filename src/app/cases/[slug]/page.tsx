import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { cases, getCaseBySlug, getAdjacentCases } from '@/data/cases';
import CasePageContent from './CasePageContent';

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseData = getCaseBySlug(slug);
  if (!caseData) return {};
  return {
    title: caseData.metaTitle,
    description: caseData.metaDescription,
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseData = getCaseBySlug(slug);
  if (!caseData) notFound();

  const { prev, next } = getAdjacentCases(slug);

  return <CasePageContent caseData={caseData} prev={prev} next={next} />;
}
