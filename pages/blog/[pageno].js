import Navbar from "@/components/Navbar";

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    const paths = data.map(el => {
        return {
            params: {
                pageno: el.id.toString(),
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.pageno}`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }
}
const Mydata = ({data}) => {
    const {id, title, body} = data;
  return (
    <>
    <Navbar />
    <div className="w-[50%] mx-auto shadow-md bg-white mt-10 rounded px-3 py-5">
        <h1 className="bg-blue-700 rounded-full text-white font-bold text-md inline-block p-1 w-[30px] h-[30px] text-center">{id}</h1>

        <h2 className="text-[18px] mt-2 font-semibold text-black">{title}</h2>
        <h3 className="text-[14px] text-black p-1">{body}</h3>
    </div>
    </>
  )
}

export default Mydata;