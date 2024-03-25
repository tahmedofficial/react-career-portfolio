import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { saveJobApplication } from "../../utility/localStorage";
import bg from "../../assets/images/bg1.png";

const JobDetails = () => {

    const notify = () => toast("Applyed");

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(id, job);
    const { job_description, salary, job_title, contact_information, job_responsibility, educational_requirements, experiences } = job;

    const handleApplyJob = () => {
        saveJobApplication(idInt)
        notify()
    }

    return (
        <div>

            <div className="bg-indigo-50 pt-14 md:relative md:h-72 md:flex">
                <div className="md:absolute">
                    <img src={bg} alt="" />
                </div>

                <div className="flex w-full justify-center items-center">
                    <h2 className="text-3xl mt-14 mb-10 font-bold md:pl-20">Job Details</h2>
                </div>
            </div>

            <div className="grid my-28 gap-4 lg:grid-cols-4 md:w-5/6 mx-auto">

                <div className="lg:col-span-3 px-4">
                    <h2 className="text-xl font-bold">Job Description:
                        <span className="text-gray-500 font-normal"> {job_description}</span>
                    </h2>
                    <h2 className="my-10 text-xl font-bold">Job Responsibility:
                        <span className="text-gray-500 font-normal"> {job_responsibility}</span>
                    </h2>
                    <h2 className="text-xl font-bold">Educational Requirements:
                        <span className="text-gray-500 font-normal"> {educational_requirements}</span>
                    </h2>
                    <h2 className="my-10 text-xl font-bold">Experiences:
                        <span className="text-gray-500 font-normal"> {experiences}</span>
                    </h2>
                </div>

                <div className="px-4 md:px-0">
                    <div className="bg-indigo-50 p-6 mb-6 rounded-lg">
                        <h2 className="border-b pb-4 border-gray-400 text-2xl font-semibold">Job Details</h2>
                        <h3 className="text-xl mt-6 flex items-center gap-2 text-gray-600 font-semibold">
                            <span className="text-indigo-400"><AiOutlineDollar /></span>Salary :
                            <span className="text-gray-400"> {salary}</span>
                        </h3>
                        <h3 className="text-xl flex items-center gap-2 mb-8 mt-2 text-gray-600 font-semibold">
                            <span className="text-indigo-400"><IoCalendarOutline /></span>Job Title :
                            <span className="text-gray-400"> {job_title}</span>
                        </h3>

                        <h2 className="border-b pb-4 border-gray-400 text-2xl font-semibold">Contact Information</h2>
                        <h3 className="text-xl flex items-center gap-2 mt-6 text-gray-600 font-semibold">
                            <span className="text-indigo-400"><FiPhone /></span>Phone :
                            <span className="text-gray-400"> {contact_information.phone}</span>
                        </h3>
                        <h3 className="text-xl flex items-center gap-2 my-2 text-gray-600 font-semibold">
                            <span className="text-indigo-400"><MdOutlineMail /></span>Email :
                            <span className="text-gray-400"> {contact_information.email}</span>
                        </h3>
                        <h3 className="text-xl flex gap-2 mb-8 text-gray-600 font-semibold">
                            <span className="text-indigo-400 mt-2"><SlLocationPin /></span>Address :
                            <span className="text-gray-400"> {contact_information.address}</span>
                        </h3>
                    </div>
                    <button onClick={handleApplyJob} className="btn md:w-full hover:opacity-80 bg-gradient-to-r from-indigo-400 to-indigo-500 text-white">Apply Now</button>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;