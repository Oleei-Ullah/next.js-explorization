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
  return (
    <>
    <Navbar />
    <h1>{data.body}</h1>
    </>
  )
}

export default Mydata;