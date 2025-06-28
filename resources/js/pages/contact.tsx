import FAQSection from '@/components/nav/faq';

import AppWrapper from '@/components/nav/app-wrapper';
import { Head } from '@inertiajs/react';

interface MyEditorProps {
    initialContent?: string;
    placeholder?: string;
}

const Contact = () => {
    return (
        <>
            <Head title="Content">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <AppWrapper>
                <FAQSection />
            </AppWrapper>
        </>
    );
};

export default Contact;
