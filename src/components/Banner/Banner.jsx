import bannerImg from "../../assets/images/user.png";

const Banner = () => {
    return (
        <div className="bg-indigo-50 pt-16">
            <div className="md:w-5/6 mx-auto md:flex">
                <div className="md:p-20 p-10">
                    <h2 className="md:text-7xl md:font-bold font-semibold text-4xl">One Step Closer To Your</h2>
                    <h2 className="text-indigo-400 pt-3 md:pt-8 md:text-7xl md:font-bold font-semibold text-4xl">Dream Job</h2>
                    <p className="text-gray-500 mt-8">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn mt-10 hover:opacity-80 bg-gradient-to-r from-indigo-400 to-indigo-500 text-white">Get Started</button>
                </div>
                <div>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;