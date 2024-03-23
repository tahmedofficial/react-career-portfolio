import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!!!</h2>
            <Link className="py-1 px-4 bg-[#151515] text-white rounded-3xl hover:opacity-30 duration-300" to="/">Go Back</Link>
        </div>
    );
};

export default ErrorPage;