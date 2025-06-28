// import { Gemini, Replit, MagicUI, VSCodium, MediaWiki, GooglePaLM } from '@/components/logos'
// import { LogoIcon } from '@/components/logo'
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { FaGoogleDrive } from 'react-icons/fa';
// import Link from 'next/link'

export default function IntegrationsSection2() {
    return (
        <section>
            <div className="bg-muted py-24 md:py-32 dark:bg-background">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="grid items-center sm:grid-cols-2">
                        <div className="relative mx-auto w-fit dark:bg-muted/50">
                            <div className="absolute inset-0 z-10 bg-radial from-transparent to-muted to-75% dark:to-background"></div>
                            <div className="mx-auto mb-2 flex w-fit justify-center gap-2">
                                <IntegrationCard>
                                    <FaGoogleDrive />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <FaGoogleDrive />
                                </IntegrationCard>
                            </div>
                            <div className="mx-auto my-2 flex w-fit justify-center gap-2">
                                <IntegrationCard>
                                    <FaGoogleDrive />
                                </IntegrationCard>
                                <IntegrationCard
                                    borderClassName="shadow-black-950/10 shadow-xl border-black/25 dark:border-white/25"
                                    className="dark:bg-white/10"
                                >
                                    <FaGoogleDrive />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <FaGoogleDrive />
                                </IntegrationCard>
                            </div>

                            <div className="mx-auto flex w-fit justify-center gap-2">
                                <IntegrationCard>
                                    <FaGoogleDrive />
                                </IntegrationCard>

                                <IntegrationCard>
                                    <FaGoogleDrive />
                                </IntegrationCard>
                            </div>
                        </div>
                        <div className="mx-auto mt-6 max-w-lg space-y-6 text-center sm:mt-0 sm:text-left">
                            <h2 className="text-3xl font-semibold text-balance md:text-4xl">Integrate with your favorite tools</h2>
                            <p className="text-muted-foreground">Connect seamlessly with popular platforms and services to enhance your workflow.</p>

                            <Button variant="outline" size="sm" asChild>
                                <Link href="#">Get Started</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const IntegrationCard = ({ children, className, borderClassName }: { children: React.ReactNode; className?: string; borderClassName?: string }) => {
    return (
        <div className={cn('relative flex size-20 rounded-xl bg-background dark:bg-transparent', className)}>
            <div role="presentation" className={cn('absolute inset-0 rounded-xl border border-black/20 dark:border-white/25', borderClassName)} />
            <div className="relative z-20 m-auto size-fit *:size-8">{children}</div>
        </div>
    );
};
