import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

export default function ScrollObject() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setTimeout(() => {
            if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
                setCurrent(0);
                api.scrollTo(0);
            } else {
                api.scrollNext();
                setCurrent(current + 1);
            }
        }, 5000);
    }, [api, current]);

    return (
        <div className="w-full px-10 py-20 lg:px-10 lg:py-30">
            <div className="container md:mx-10 lg:mx-auto">
                <div className="flex flex-col gap-10">
                    <h2 className="font-regular text-left text-3xl tracking-tighter md:text-3xl lg:max-w-xl lg:text-5xl">
                        Trusted by thousands of businesses worldwide
                    </h2>
                    <Carousel setApi={setApi} className="w-full">
                        <CarouselContent>
                            {Array.from({ length: 15 }).map((_, index) => (
                                <CarouselItem className="basis-1/3 lg:basis-1/5" key={index}>
                                    <div className="flex aspect-square items-center justify-center rounded-md bg-muted p-6">
                                        <span className="text-sm">Logo {index + 1}</span>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
