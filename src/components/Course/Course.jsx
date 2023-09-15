
import PropTypes from 'prop-types';
import { BsBook } from 'react-icons/bs';
import { FiDollarSign } from 'react-icons/fi';

const Course = ({ course }) => {
    const { course_name, cover_img, details, price, credit } = course
    // console.log(course)
    return (
        <div className='p-4 bg-white rounded-lg'>
            <img className=' w-60 h-36 mb-2' src={cover_img} alt="" />
            <h2 className=' text-base font-semibold py-2'>{course_name}</h2>
            <p className=' text-sm text-[#1C1B1B]'>{details}</p>
            <div className=' flex justify-between text-[#1C1B1B] my-4'>
                <h4 className='flex items-center gap-1'><FiDollarSign></FiDollarSign>  Price: {price}</h4>
                <h4 className='flex items-center gap-1'><BsBook></BsBook> Credit: {credit}hr</h4>
            </div>
            <button className='w-full bg-[#2F80ED] rounded-lg text-white p-2'> Select</button>

        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired
};

export default Course;