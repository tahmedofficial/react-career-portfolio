import accounts from "../../assets/images/accounts.png"
import creative from "../../assets/images/creative.png"
import marketing from "../../assets/images/marketing.png"
import engineering from "../../assets/images/chip.png"


const CategoryList = () => {


    return (
        <div>
            <div className="text-center mt-24 mb-10">
                <h2 className="text-5xl font-semibold">Job Category List</h2>
                <p className="text-gray-500 mt-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="px-5 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="p-10 bg-indigo-50 rounded-lg">
                    <img className="p-3 bg-indigo-100 rounded-2xl" src={accounts} alt="icon" />
                    <h3 className="text-2xl font-semibold mt-6">Account & Finance</h3>
                    <p className="text-gray-500 pt-3">300 Jobs Available</p>
                </div>
                <div className="p-10 bg-indigo-50 rounded-lg">
                    <img className="p-3 bg-indigo-100 rounded-2xl" src={creative} alt="icon" />
                    <h3 className="text-2xl font-semibold mt-6">Creative Design</h3>
                    <p className="text-gray-500 pt-3">100+ Jobs Available</p>
                </div>
                <div className="p-10 bg-indigo-50 rounded-lg">
                    <img className="p-3 bg-indigo-100 rounded-2xl" src={marketing} alt="icon" />
                    <h3 className="text-2xl font-semibold mt-6">Marketing & Sales</h3>
                    <p className="text-gray-500 pt-3">150 Jobs Available</p>
                </div>
                <div className="p-10 bg-indigo-50 rounded-lg">
                    <img className="p-3 bg-indigo-100 rounded-2xl" src={engineering} alt="icon" />
                    <h3 className="text-2xl font-semibold mt-6">Engineering Job</h3>
                    <p className="text-gray-500 pt-3">220 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};


export default CategoryList;