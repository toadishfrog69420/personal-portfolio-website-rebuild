import { getBlogPosts } from "@/app/components/util/blog-post-parser";

export const baseUrl = 'https://yxyang.info'

export default async function blogSiteMap() {
    let blogs = getBlogPosts().map((post) => (
        {
            url:`${baseUrl}/blog/${post.slug}`,
            lastModified: post.metadata.publishedAt,
        }
    ))

    let routes = ['', '/blog'].map((route) => (
        {
            url: `${baseUrl}${route}`,
            lastModified: new Date().toISOString().split('T')[0],
        }
    ))

    return [...routes, ...blogs]
}