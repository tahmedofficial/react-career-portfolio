import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import bg from "../../assets/images/bg1.png";
import AppliedJobDetails from "../AppliedJobDetails/AppliedJobDetails";
import { Helmet } from "react-helmet-async";


const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if (filter == "all") {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === "remote") {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Remote");
            setDisplayJobs(remoteJobs);
        }
        else if (filter === "onsite") {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite");
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobId = getStoredJobApplication();
        if (jobs.length > 0) {

            const jobsApplied = [];
            for (const id of storedJobId) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);

            // const jobsApplied = jobs.filter(job => storedJobId.includes(job.id))
        }
    }, [jobs])

    return (
        <div>
            <Helmet>
                <title>Applied Jobs</title>
            </Helmet>
            <div className="bg-indigo-50 pt-14 md:relative md:h-72 md:flex">
                <div className="md:absolute">
                    <img src={bg} alt="" />
                </div>

                <div className="flex w-full justify-center items-center">
                    <h2 className="text-3xl mt-14 mb-10 font-bold md:pl-20">Applied Jobs</h2>
                </div>
            </div>

            <div className="md:w-5/6 mx-auto p-4">
                <div className="flex justify-end md:mt-28 mb-10 mt-16">
                    <details className="dropdown">
                        <summary className="m-1 btn">Filter By</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li onClick={() => handleJobsFilter("all")}><a>All</a></li>
                            <li onClick={() => handleJobsFilter("remote")}><a>Remote</a></li>
                            <li onClick={() => handleJobsFilter("onsite")}><a>Onsite</a></li>
                        </ul>
                    </details>
                </div>

                <ul>
                    {
                        displayJobs.map(job => <AppliedJobDetails key={job.id} job={job}></AppliedJobDetails>)
                    }
                </ul>
            </div>

        </div>
    );
};

export default AppliedJobs;