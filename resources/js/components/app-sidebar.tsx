import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Cat, LayoutGrid, MessageCircle, Podcast, Users } from 'lucide-react';
import AppLogo from './app-logo';

export function AppSidebar() {
    const { auth } = usePage().props as any;
    const userRole = auth?.user?.role || 'user';

    const mainNavItems: NavItem[] = [
        {
            title: 'Dashboard',
            href: '/dashboard',
            icon: LayoutGrid,
        },
    ];

    const adminNavItems: NavItem[] = [
        {
            title: 'Manage Category',
            href: '/category',
            icon: Cat,
        },
        {
            title: 'Manage Posts',
            href: '/posts',
            icon: Podcast,
        },
    ];
    const superAdminNavItems: NavItem[] = [
        {
            title: 'Manage Comments',
            href: '/comments',
            icon: MessageCircle,
        },
        {
            title: 'Manage Users',
            href: '/users',
            icon: Users,
        },
    ];

    let roleBasedNavItems = [...mainNavItems];
    if (userRole === 'admin') {
        roleBasedNavItems = [...roleBasedNavItems, ...adminNavItems];
    }
    if (userRole === 'superadmin') {
        roleBasedNavItems = [...roleBasedNavItems, ...adminNavItems, ...superAdminNavItems];
    }

    // const footerNavItems: NavItem[] = [
    //     {
    //         title: 'Repository',
    //         href: 'https://github.com/laravel/react-starter-kit',
    //         icon: Folder,
    //     },
    //     {
    //         title: 'Documentation',
    //         href: 'https://laravel.com/docs/starter-kits#react',
    //         icon: BookOpen,
    //     },
    // ];

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={roleBasedNavItems} />
                {/* <NavMain items={mainNavItems} /> */}
            </SidebarContent>

            <SidebarFooter>
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
