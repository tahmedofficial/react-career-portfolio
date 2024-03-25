import PropTypes from "prop-types";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";

const AppliedJobDetails = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div>
            <div className="card md:card-side bg-base-100 mb-8 shadow-xl">
                <div className="flex items-center bg-gray-100 h-60 justify-center  px-10 m-6 rounded-xl">
                    <img className="w-40" src={logo} alt="Company logo" />
                </div>

                <div className="flex w-full flex-col md:flex-row justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-semibold">{job_title}</h2>
                        <h2 className='text-lg py-5'>{company_name}</h2>
                        <div className='flex gap-5 pb-5'>
                            <button className='hover:bg-slate-200 duration-300 py-2 px-5 font-semibold text-indigo-400 border rounded-lg border-indigo-400'>{remote_or_onsite}</button>
                            <button className='hover:bg-slate-200 duration-300 py-2 px-5 font-semibold text-indigo-400 border rounded-lg border-indigo-400'>{job_type}</button>
                        </div>
                        <div className='flex gap-4'>
                            <h2 className='flex items-center text-lg gap-1'>
                                <SlLocationPin />{location}
                            </h2>

                            <h2 className='flex items-center text-lg gap-1'>
                                <AiOutlineDollar />{salary}
                            </h2>
                        </div>
                    </div>

                    <div className="md:pr-10 py-8 lg:pr-28">
                        <button className="btn hover:opacity-80 bg-gradient-to-r from-indigo-400 to-indigo-500 text-white">View Details</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

AppliedJobDetails.propTypes = {
    job: PropTypes.object.isRequired
}

export default AppliedJobDetails;