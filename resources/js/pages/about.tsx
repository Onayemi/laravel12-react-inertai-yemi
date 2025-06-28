import AppWrapper from '@/components/nav/app-wrapper';
import Blog from '@/components/nav/blog';
import CallToAction from '@/components/nav/calltoaction';
import ContentSection from '@/components/nav/content';
import FAQSection from '@/components/nav/faq';
import HeroSection from '@/components/nav/hero-section';
import IntegrationsSection2 from '@/components/nav/integratin2';
import IntegrationsSection from '@/components/nav/integration';
import Pricing from '@/components/nav/price';
import { Head } from '@inertiajs/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-flip'; // Import Cube effect CSS
import 'swiper/css/navigation';
// import { Autoplay, EffectFlip, Navigation } from 'swiper/modules'; //EffectCube
// import { Swiper, SwiperSlide } from 'swiper/react';

export default function About() {
    return (
        <>
            <Head title="About Us">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <AppWrapper>
                <HeroSection />

                <Pricing />

                <FAQSection />
                <IntegrationsSection />
                <IntegrationsSection2 />
                <Blog />
                <CallToAction />
                <ContentSection />

                {/* <FooterSection /> */}
            </AppWrapper>
        </>
    );
}
