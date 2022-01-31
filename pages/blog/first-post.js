import Link from 'next/link'
import Header from 'components/Header.js';
import PageHead from 'components/Head';

export default function Home() {
    return (
        <div>
            <PageHead />

            <Header />
            <h1>First Post</h1>
            <h2>
                <Link href="/blog">
                    <a>Back to home</a>
                </Link>
            </h2>
            <Footer />
        </div>
    )
}