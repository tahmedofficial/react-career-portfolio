import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {

    const notify = () => toast("Applyed");

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(id, job);

    const handleApplyJob = () => {
        saveJobApplication(idInt)
        notify()
    }

    return (
        <div>
            <h2>Job Details of: {id}</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2>Details</h2>
                </div>
                <div className="border">
                    <h2>side bar</h2>
                    <button onClick={handleApplyJob} className="btn md:w-full hover:opacity-80 bg-gradient-to-r from-indigo-400 to-indigo-500 text-white">Apply Now</button>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;