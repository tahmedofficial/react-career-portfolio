import { useState } from "react";
import PropTypes from 'prop-types';
import Job from "../Job/Job";

const FeaturedJobs = ({jobs}) => {

    const [dataLength, setDataLength] = useState(4);

    return (
        <div className="md:w-5/6 mx-auto">
            <div className="text-center mt-24 mb-10">
                <h2 className="text-5xl font-semibold">Featured Jobs {jobs.length}</h2>
                <p className="text-gray-500 mt-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? "hidden" : "flex justify-center my-10"}>
                <button onClick={() => setDataLength(jobs.length)} className="btn hover:opacity-80 bg-gradient-to-r from-indigo-400 to-indigo-500 text-white">See All Jobs</button>
            </div>
        </div>
    );
};

FeaturedJobs.propTypes={
    jobs: PropTypes.array.isRequired
}

export default FeaturedJobs;