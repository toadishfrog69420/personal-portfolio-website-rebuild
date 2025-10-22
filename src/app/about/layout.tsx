import Footer from "@/app/components/ui/footer";
import { Navbar } from "@/app/components/ui/navbar";

export const metadata = {
    title: 'About',
    description: 'Something about myself.'
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <Navbar />
            {children}
            <Footer />
        </section>
    )
}
