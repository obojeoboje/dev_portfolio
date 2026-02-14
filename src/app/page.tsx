import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CasesList from '@/components/CasesList';
import Pricing from '@/components/Pricing';
import Process from '@/components/Process';
import Contacts from '@/components/Contacts';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <CasesList />
      <Pricing />
      <Process />
      <Contacts />
    </>
  );
}
