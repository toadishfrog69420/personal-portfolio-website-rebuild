import { Navbar } from "@/app/components/ui/navbar";
import Footer from "@/app/components/ui/footer";

export const metadata = {
    title:'Blog',
    description:'Random posts'
}

export default function BlogLayout({
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
