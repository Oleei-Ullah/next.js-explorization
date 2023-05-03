import Link from "next/link"

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen w-full bg-white text-black">
            <div className="relative w-full text-center">
                <h1 className="font-extrabold text-[200px] text-[#b8e0f2] opacity-80">404</h1>
                <div className="absolute top-[40%] left-0 text-center w-full">
                    <h2 className="text-[30px] font-bold uppercase ">We are sorry, Page not found !</h2>
                    <p className="text-[14px] uppercase text-gray-700">The page you are looking for might have removed or name changed or it is temporarily unavailabe.</p>
                    <Link className="border-2 inline-block bg-blue-500 px-10 py-3 mt-8 text-white text-md rounded-full" href='/'>Back To Homepage</Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage