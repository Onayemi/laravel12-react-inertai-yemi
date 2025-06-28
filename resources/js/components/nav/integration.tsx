import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
// import Link from 'next/link'
import * as React from 'react';
// import { Gemini, Replit, MagicUI, VSCodium, MediaWiki, GooglePaLM } from '@/components/logos'
import { Link } from '@inertiajs/react';
import { FaGoogleDrive } from 'react-icons/fa';

export default function IntegrationsSection() {
    return (
        <section>
            <div className="py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold text-balance md:text-4xl">Integrate with your favorite tools</h2>
                        <p className="mt-6 text-muted-foreground">Connect seamlessly with popular platforms and services to enhance your workflow.</p>
                    </div>

                    <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        <IntegrationCard
                            title="Google Gemini"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                        >
                            <FaGoogleDrive />
                        </IntegrationCard>

                        <IntegrationCard title="Replit" description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.">
                            <FaGoogleDrive />
                        </IntegrationCard>

                        <IntegrationCard title="Magic UI" description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.">
                            <FaGoogleDrive />
                        </IntegrationCard>

                        <IntegrationCard title="VSCodium" description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.">
                            <FaGoogleDrive />
                        </IntegrationCard>

                        <IntegrationCard title="MediaWiki" description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.">
                            <FaGoogleDrive />
                        </IntegrationCard>

                        <IntegrationCard
                            title="Google PaLM"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                        >
                            <FaGoogleDrive />
                        </IntegrationCard>
                    </div>
                </div>
            </div>
        </section>
    );
}

const IntegrationCard = ({
    title,
    description,
    children,
    link = 'https://github.com/meschacirung/cnblocks',
}: {
    title: string;
    description: string;
    children: React.ReactNode;
    link?: string;
}) => {
    return (
        <Card className="p-6">
            <div className="relative">
                <div className="*:size-10">{children}</div>

                <div className="space-y-2 py-6">
                    <h3 className="text-base font-medium">{title}</h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>
                </div>

                <div className="flex gap-3 border-t border-dashed pt-6">
                    <Button asChild variant="secondary" size="sm" className="gap-1 pr-2 shadow-none">
                        <Link href={link}>
                            Learn More
                            <ChevronRight className="ml-0 !size-3.5 opacity-50" />
                        </Link>
                    </Button>
                </div>
            </div>
        </Card>
    );
};
