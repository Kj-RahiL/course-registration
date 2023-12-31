
import PropTypes from 'prop-types';
import { BsBook } from 'react-icons/bs';
import { FiDollarSign } from 'react-icons/fi';


const Course = ({ course, handleSelect }) => {
    const { course_name, cover_img, details, price, credit } = course
    // console.log(course)
    return (
        <div className='p-4 bg-white rounded-lg mx-auto'>
            <img className=' w-full h-36 mb-2' src={cover_img} alt="" />
            <h2 className=' text-base font-bold py-2'>{course_name}</h2>
            <p className=' text-sm text-gray-500'>{details}</p>
            <div className=' flex justify-between text-gray-500 my-4'>
                <h4 className='flex items-center gap-1'><FiDollarSign></FiDollarSign>  Price: {price}</h4>
                <h4 className='flex items-center gap-1'><BsBook></BsBook> Credit: {credit}hr</h4>
            </div>
            <button className='w-full bg-[#2F80ED] rounded-lg text-white p-2' 
            onClick={()=> handleSelect(course)}> Select</button>
            

        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelect: PropTypes.func
};

export default Course;