import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { cases, getCaseBySlug, getAdjacentCases } from '@/data/cases';
import CasePageContent from './CasePageContent';
import BonaqaDetailPage from './BonaqaDetailPage';

const BASE_URL = 'https://privalov.dev';

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
    openGraph: {
      images: [
        {
          url: caseData.heroImage,
          width: 1200,
          height: 630,
          alt: caseData.title,
        },
      ],
    },
    alternates: {
      canonical: `/cases/${slug}`,
    },
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

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Главная',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Кейсы',
        item: `${BASE_URL}/cases`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: caseData.title,
        item: `${BASE_URL}/cases/${slug}`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbJsonLd)}
      </script>
      {slug === 'bonaqa-tech' ? (
        <BonaqaDetailPage caseData={caseData} prev={prev} next={next} />
      ) : (
        <CasePageContent caseData={caseData} prev={prev} next={next} />
      )}
    </>
  );
}
