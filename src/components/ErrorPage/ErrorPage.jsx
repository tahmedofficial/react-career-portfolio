import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-36">
            <h2 className="text-7xl text-red-700 mb-16">Oops!!!</h2>
            <Link className="py-3 px-16 bg-[#151515] text-2xl text-white rounded-full hover:opacity-30 duration-300" to="/">Go Back</Link>
        </div>
    );
};

export default ErrorPage;