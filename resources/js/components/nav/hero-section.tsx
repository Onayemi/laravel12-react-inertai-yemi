import { Button } from '@/components/ui/button';
// import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
// import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur'
import { Link } from '@inertiajs/react';
import FeaturesSection from './feature';

export default function HeroSection() {
    return (
        <>
            {/* <HeroHeader /> */}

            {/* <Banner /> */}

            <main className="overflow-x-hidden">
                <section>
                    <div className="pt-12 pb-24 md:pb-32 lg:pt-25 lg:pb-30">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-5xl font-medium text-balance md:text-6xl lg:mt-16 xl:text-7xl">
                                    Ship 10x Faster with NS
                                </h1>
                                <p className="mt-8 max-w-2xl text-lg text-pretty">
                                    Highly customizable components for building modern websites and applications that look and feel the way you mean
                                    it.
                                </p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button asChild size="lg" className="px-5 text-base">
                                        <Link href="#link">
                                            <span className="text-nowrap">Start Building</span>
                                        </Link>
                                    </Button>
                                    <Button key={2} asChild size="lg" variant="ghost" className="px-5 text-base">
                                        <Link href="#link">
                                            <span className="text-nowrap">Request a demo</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            {/* <Image
                                className="-z-10 order-first ml-auto h-56 w-full object-cover invert sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0"
                                src="https://ik.imagekit.io/lrigu76hy/tailark/abstract-bg.jpg?updatedAt=1745733473768"
                                alt="Abstract Object"
                                height="4000"
                                width="3000"
                            /> */}
                        </div>
                    </div>
                </section>
            </main>

            <FeaturesSection />
        </>
    );
}
