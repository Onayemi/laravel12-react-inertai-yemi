import AppWrapper from '@/components/nav/app-wrapper';
import Banner from '@/components/nav/banner';
import CallToAction from '@/components/nav/calltoaction';
import FAQSection from '@/components/nav/faq';
import HeroSection from '@/components/nav/hero-section';
import IntegrationsSection2 from '@/components/nav/integratin2';
import IntegrationsSection from '@/components/nav/integration';
import Pricing from '@/components/nav/price';
import ScrollObject from '@/components/nav/ScrollingObject';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="About Us">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <AppWrapper>
                <Banner />
                <HeroSection />

                <Pricing />

                <FAQSection />
                <IntegrationsSection />
                <IntegrationsSection2 />
                <ScrollObject />
                <CallToAction />
                {/* <ContentSection /> */}

                {/* <FooterSection /> */}
            </AppWrapper>
        </>
    );
}
