import { ReactNode } from 'react';
import FooterSection from './footer';
import { HeroHeader } from './header';

interface AppWrapperProps {
    children: ReactNode;
}
export default function AppWrapper({ children }: AppWrapperProps) {
    return (
        <div>
            <HeroHeader />
            <main>{children}</main>

            <FooterSection />
        </div>
    );
}
