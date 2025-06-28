import { SharedData } from '@/types';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaSpotify, FaYoutube } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';
import { Button } from '../ui/button';

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    // { name: 'Content', href: '/content' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
];

export const HeroHeader = () => {
    const { post, processing } = useForm();
    const { auth } = usePage<SharedData>().props;

    const [menuState, setMenuState] = React.useState(false);

    const logoutUser = () => {
        post(route('logout'));
    };
    return (
        <header>
            <nav data-state={menuState && 'active'} className="fixed z-20 w-full border-b bg-background/90 bg-black/100 backdrop-blur-3xl">
                <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link href="/" aria-label="home" className="flex items-center space-x-2">
                                <img
                                    src="/image/logo.png"
                                    className="h-[35px] w-[90px] md:h-[35px] lg:h-[50px] lg:w-[120px]"
                                    alt="Description of image"
                                />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 text-white lg:hidden"
                            >
                                <Menu className="m-auto size-6 duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
                                <X className="absolute inset-0 m-auto size-6 scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm font-bold">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.href} className="block text-muted-foreground duration-150 hover:text-white">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border bg-background p-6 shadow-2xl shadow-zinc-300/20 in-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-4 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:in-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base font-bold">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.href} className="block text-muted-foreground duration-150 hover:text-accent-foreground">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {auth?.user ? (
                                <>
                                    <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                        <h3 className="text-2xl text-white">Hi {auth?.user?.name},</h3>
                                        <Button onClick={logoutUser} asChild variant="outline" size="sm">
                                            <span>Logout</span>
                                        </Button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                        <Button asChild variant="outline" size="sm">
                                            <Link href={route('login')}>
                                                <span>Login</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </>
                            )}
                            <div className="flex gap-1">
                                <Button asChild variant="secondary" size="sm">
                                    <a href={'https://facebook.com'} target="_blank" rel="noopener noreferrer">
                                        <FaFacebook size={24} color="blue" />
                                    </a>
                                </Button>
                                <Button asChild variant="outline" size="sm">
                                    <a href={'https://google.com'} target="_blank" rel="noopener noreferrer">
                                        <FaYoutube size={24} color="red" />
                                    </a>
                                </Button>
                                <Button asChild variant="outline" size="sm">
                                    <a href={'https://instagram.com'} target="_blank" rel="noopener noreferrer">
                                        <FaInstagram size={24} color="red" />
                                    </a>
                                </Button>
                                <Button asChild variant="outline" size="sm">
                                    <a href={'https://linkedin.com'} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin size={24} color="blue" />
                                    </a>
                                </Button>
                                <Button asChild variant="outline" size="sm">
                                    <a href={'https://music.apple.com/us/new'} target="_blank" rel="noopener noreferrer">
                                        <SiApplemusic size={24} color="black" />
                                    </a>
                                </Button>
                                <Button asChild variant="outline" size="sm">
                                    <a href={'https://open.spotify.com/'} target="_blank" rel="noopener noreferrer">
                                        <FaSpotify size={24} color="green" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
