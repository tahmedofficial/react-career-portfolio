import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import { Helmet } from "react-helmet-async";

const Home = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])


    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <CategoryList jobs={jobs}></CategoryList>
            <FeaturedJobs jobs={jobs}></FeaturedJobs>
        </div>
    );
};

export default Home; <h2>This is Home</h2>