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
            <div className="w-1/2 mx-auto space-y-4">
                <h1 className="text-center text-blue-600 font-bold text-[26px]">Blog data</h1>
                {
                    data && data.slice(0,5).map(({ id, title }) => {
                        return (
                            <div key={id} className="p-2 shadow-md mt-3 flex items-center gap-3">
                                <h1 className="bg-blue-700 rounded-full text-white font-bold text-md inline-block p-1 w-[30px] h-[30px] text-center">{id}</h1>
                                <Link href={`/blog/${id}`}>
                                    <h2 className="capitalize">{title}</h2>
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