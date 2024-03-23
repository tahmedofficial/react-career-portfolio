import PropTypes from 'prop-types';
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";

const Job = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;


    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={logo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-semibold">{job_title}</h2>
                <p className='text-lg'>{company_name}</p>
                <div className='flex gap-5'>
                    <button className='hover:bg-slate-200 duration-300 py-2 px-5 font-semibold text-indigo-400 border rounded-lg border-indigo-400'>{remote_or_onsite}</button>
                    <button className='hover:bg-slate-200 duration-300 py-2 px-5 font-semibold text-indigo-400 border rounded-lg border-indigo-400'>{job_type}</button>
                </div>
                <div className='md:flex gap-4'>
                    <h2 className='flex items-center text-lg gap-1'>
                        <SlLocationPin />{location}
                    </h2>

                    <h2 className='flex items-center text-lg gap-1'>
                        <AiOutlineDollar />{salary}
                    </h2>
                </div>
                <div className="card-actions">
                    <button className="btn hover:opacity-80 bg-gradient-to-r from-indigo-400 to-indigo-500 text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired
}

export default Job;