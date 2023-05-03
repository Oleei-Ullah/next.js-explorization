import Navbar from "@/components/Navbar";
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}

const Blog = ({ data }) => {
    return (
        <>
            <Navbar />
            <div>
                <h1>Blog data</h1>
                {
                    data && data.map(({ id, title }) => {
                        return (
                            <div key={id}>
                                <h1>{id}</h1>
                                <Link href={`/blog/${id}`}>
                                    <h2>{title}</h2>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Blog