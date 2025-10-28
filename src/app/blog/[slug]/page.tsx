import { CustomMDX } from "@/app/components/util/mdx";
import { formatDate, getBlogPosts } from "@/app/components/util/blog-post-parser";
import { baseUrl } from "@/app/components/util/sitemap";
import { notFound } from "next/navigation";


export async function generateStaticParams() {
    let posts = getBlogPosts()

    return posts.map((post) => ({
        slug: post.slug,
    }))
}


export function generateMetadata({params}: any){
    let post = getBlogPosts().find((post) => post.slug === params.slug)
    if (!post) {
        return
    }

    let {
        title, 
        publishedAt: publishedTime,
        summary: description, 
        cover,
    } = post.metadata
    
    let ogImgae = cover ? cover : `${baseUrl}/og?title=${encodeURIComponent(title)}`

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime,
            url: `${baseUrl}/blog/${post.slug}`,
            cover: [
                {
                    url: ogImgae,
                },
            ],
        },
    
    }
}


export default async function Blog({params}:any) {
    const resolvedParams = await params; 

    let post = getBlogPosts().find((post)=>post.slug === resolvedParams.slug)

    if (!post) {
        notFound()
    }

    return(
        <section className={`blog-section`}>
            <div className={`blog-container-div`}>
                <script 
                    type="application/ld+json"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'BlogPosting',
                            headline: post.metadata.title,
                            datePublished: post.metadata.publishedAt,
                            dateModified: post.metadata.publishedAt,
                            description: post.metadata.summary,
                            image: post.metadata.cover 
                                ? `${baseUrl}${post.metadata.cover}`
                                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
                                url: `${baseUrl}/blog/${post?.slug}`,
                                authro: {
                                    '@type': 'Person',
                                    name: 'Sean Yang',
                                },
                        }),
                    }}
                />
                {post.metadata.cover && (<img 
                    src={post.metadata.cover}
                    alt={post.metadata.title}
                    className="w-full h-64 object-cover"/>
                )}
                <div className="p-6">
                    <h1 className={`blog-title`}>
                        {post.metadata.title}
                    </h1>
                    <div className={`blog-date-div`}>
                        <p className={`blog-date-p`}>
                            {formatDate(post.metadata.publishedAt)}
                        </p>
                    </div>
                    <div className={`blog-summary`}>
                        {post.metadata.summary}
                    </div>
                    <article className={`blog-article`}>
                        <CustomMDX source={post.content} />
                    </article>
                </div>
            </div>
        </section>
    )
}