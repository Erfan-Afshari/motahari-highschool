'use client'
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
// Use usePathname for catching route name.
import { usePathname } from 'next/navigation';

export const LayoutProvider = ({ children }) => {
    const pathname = usePathname();
    return (
        <>
			<Navbar />
            {children}
            {pathname !== "/signin" && <Footer />}
        </>
    )
};