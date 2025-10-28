import Link from "next/link";
import Image from "next/image";
import { formatDate, getBlogPosts } from "@/app/components/util/blog-post-parser";

export function BlogPosts() {
    let allBlogs = getBlogPosts()

    return (
        <div className="space-y-6">
            {
                allBlogs.sort((a,b) => {
                    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)){
                        return -1;
                    }
                    return 1;
                })
                .map(
                    (post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                            <div className={`blog-post-card-container`}>
                                <div className="w-full h-48 object-cover relative">
                                    {post.metadata.cover && (
                                        <Image 
                                            src={post.metadata.cover}
                                            alt={post.metadata.title}
                                            fill={true}
                                            sizes='50%'
                                            priority={true}
                                            style={{aspectRatio: '9/16', objectFit: "cover"}}
                                        />
                                    )}
                                </div>
                                <div className="p-6 w-full">
                                    <p className={`blog-post-card-date-p`}>
                                        {formatDate(post.metadata.publishedAt, false)}
                                    </p>
                                    <h2 className={`blog-post-card-title-p`}>
                                        {post.metadata.title}
                                    </h2>
                                    <p className={`blog-post-card-summary-p`}>
                                        {post.metadata.summary}
                                    </p>
                                    <p className={`blog-post-card-readMore-p`}>Read more</p>
                                </div>
                            </div>
                        </Link>                    
                    
                    )
                )
            }
        </div>
    )
}