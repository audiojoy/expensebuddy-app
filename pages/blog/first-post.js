import { getSortedPostsData } from '../../lib/posts'


export async function getStaticProps() {
    const allPostsData = await getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }) {
    return (
        <div>
            {/* Keep the existing code here */}

            {/* Add this <section> tag below the existing <section> tag */}
            <section >
                <h2 >Blog</h2>
                <ul >
                    {allPostsData.map(({ id, date, title, description }) => (
                        <li>
                            {title}
                            <br />
                            {id}
                            <br />
                            {date}
                            <br />
                            {description}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}