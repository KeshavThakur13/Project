import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { Button } from "./ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const About = () => {
    return (
        <div>
            <Navbar />
            <div className="h-[76vh] w-6/12 text-center m-auto">
                <h1 className="font-bold font-[poppins]  text-blue-600 text-6xl text-center mt-5 mb-10">About Us</h1>
                <p className="text-justify">
                    <span className="font-bold text-3xl font-[poppins]">Job<span className="text-[#3771c3]">Sphere </span></span>is an innovative job portal designed to streamline the recruitment process for both job seekers and employers. Our platform offers a seamless experience by providing personalized job recommendations, advanced search filters, and real-time updates on job postings.For job seekers, JobSphere serves as a one-stop destination to explore diverse pportunities across multiple industries. Users can create detailed profiles, upload resumes, and apply to jobs effortlessly.
                    For employers, JobSphere simplifies the hiring process by enabling them to post job listings, screen applications, and connect with the best talent efficiently. With features like applicant tracking, automated shortlisting, and direct messaging, we help businesses find the right candidates quickly and effectively.At JobSphere, we are committed to making job searching and hiring more accessible, transparent, and efficient. Whether you're looking for your next career move or the perfect hire, JobSphere connects talent with opportunities like never before. 🚀

                </p>
                <Link to="/">
                <Button className="mt-10 px-10 py-6 bg-blue-500 hover:bg-blue-600 gap-2">Explore <FaArrowRightLong /></Button>
                </Link>

            
            </div>
            <Footer />
        </div>
    )
}
export default About;