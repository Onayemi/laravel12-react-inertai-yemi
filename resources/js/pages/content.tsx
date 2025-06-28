import ContentSection from '@/components/nav/content';
import FAQSection from '@/components/nav/faq';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-flip'; // Import Cube effect CSS
import 'swiper/css/navigation';
// import { Autoplay, EffectFlip, Navigation } from 'swiper/modules'; //EffectCube
// import { Swiper, SwiperSlide } from 'swiper/react';

import JoditEditor from 'jodit-react';
// import 'jodit/build/jodit.min.css'; // Import Jodit styles
import parse from 'html-react-parser';
// import { JoditConfig } from 'jodit'; // Import Jodit for types
import AppWrapper from '@/components/nav/app-wrapper';
import { Head } from '@inertiajs/react';
import React, { useMemo, useRef, useState } from 'react';

interface MyEditorProps {
    initialContent?: string;
    placeholder?: string;
}

const Content: React.FC<MyEditorProps> = ({ initialContent = '', placeholder = 'Start typing...' }) => {
    const editor = useRef(null); // Type the ref with Jodit instance
    // const editor = useRef<Jodit | null>(null); // Type the ref with Jodit instance
    const [content, setContent] = useState<string>(initialContent);

    // Configure Jodit editor options
    // Use JoditConfig for type safety for the config object
    // const config: JoditConfig = useMemo(
    const config = useMemo(
        () => ({
            readonly: false,
            placeholder: placeholder,
            height: 400,
            // Add more Jodit options as needed (refer to Jodit documentation)
        }),
        [placeholder],
    );

    const handleBlur = (newContent: string) => {
        setContent(newContent);
    };

    return (
        <>
            <Head title="Content">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <AppWrapper>
                <FAQSection />

                <section className="bg-gray-50">
                    <div className="px-20 py-10">
                        <h1 className="mb-5 text-3xl">Blog Content</h1>
                        <JoditEditor
                            ref={editor}
                            value={content}
                            config={config}
                            onBlur={handleBlur} // Use onBlur to update content for performance
                            onChange={() => {}} // onChange can be debounced or used for real-time updates
                        />

                        {parse(content)}
                    </div>
                </section>

                <ContentSection />
            </AppWrapper>
        </>
    );
};

export default Content;
