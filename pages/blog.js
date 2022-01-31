import Link from 'next/link'
import Header from 'components/Header.js';
import PageHead from 'components/Head'
import Footer from 'components/Footer';

const posts = [
    {
        title: 'Building Expense Buddy with SwiftUI #2',
        href: '/blog/first-post',
        category: { name: 'Tutorial', href: '#' },
        description:
            'Today we will learn how to build the beautiful tab bar which is used across the app.',
        date: 'Oct 16, 2021',
        datetime: '2021-10-16',
        imageUrl: 'blog_2_thumbnail.png',
    },
    {
        title: 'Building Expense Buddy with SwiftUI #1',
        href: '/blog/first-post',
        category: { name: 'Tutorial', href: '#' },
        description:
            'Today we will learn how to build the horizontal category list which is used in the Transaction screen.',
        date: 'Aug 25, 2021',
        datetime: '2021-08-25',
        imageUrl: 'blog_1_thumbnail.png',
    },
]

export default function Home() {
    return (
        <div>
            <PageHead />
            <Header />
            <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                <div className="absolute inset-0">
                    <div className="bg-white h-1/3 sm:h-2/3" />
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                            Latest posts
                        </h2>
                    </div>
                    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                        {posts.map((post) => (
                            <a href={post.href}>
                                < div key={post.title} className="flex flex-col rounded-lg shadow hover:shadow-xl overflow-hidden" >
                                    <div className="flex-shrink-0">
                                        <img className="h-48 w-full object-scale-down" src={`/assets/${post.imageUrl}`} />
                                    </div>
                                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-indigo-600">
                                                {post.category.name}
                                            </p>

                                            <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                            <p className="mt-3 text-base text-gray-500">{post.description}</p>

                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div >
            <Footer />
        </div >

    )
}