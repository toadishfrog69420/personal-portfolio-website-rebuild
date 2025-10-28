import { TransitionSection } from "@/app/components/ui/transition-section";
import { BlogPosts } from "@/app/blog/components/posts";

export default function Page() {
    return (
        <TransitionSection>
            
            <h1 className={`component-page-header`}>
                Blog
            </h1>
            
            {/* BlogPosts */}
            <BlogPosts />
            
        </TransitionSection>
    )
}