import PropTypes from 'prop-types';

const Job = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;


    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={logo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className='md:flex gap-5'>
                    <button className='hover:bg-slate-200 duration-300 mb-3 md:mb-0 py-2 px-5 font-semibold text-indigo-400 border rounded-lg border-indigo-400'>{remote_or_onsite}</button>
                    <button className='hover:bg-slate-200 duration-300 py-2 px-5 font-semibold text-indigo-400 border rounded-lg border-indigo-400'>{job_type}</button>
                </div>
                <div className="card-actions">
                    <button className="btn bg-indigo-400 text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired
}

export default Job;