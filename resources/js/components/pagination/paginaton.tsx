import { Link } from '@inertiajs/react';

interface LinksType {
    url: string;
    label: string;
    active: boolean;
}
interface PostType {
    links: LinksType[];
    // to: number;
    // from: number;
    // total: number;
}
export default function Pagination({ links }: PostType) {
    // export default function PostsPagination({ posts }: { posts: PostType }) {
    return (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 px-10 sm:justify-between">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.url ?? '#'}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                    className={`pointer-events-none rounded border px-3 py-1 text-sm opacity-50 ${link.active ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'} ${link.url ? 'pointer-events-none opacity-50' : 'hover:bg-gray-100'} `}
                />
            ))}
        </div>
    );
}
