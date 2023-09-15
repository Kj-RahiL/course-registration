
import PropTypes from 'prop-types';

const CourseLists = ({courseList}) => {
    // console.log(courseList)
    return (
       <div className='w-1/4 ml-5'>
         <div className=' bg-white rounded-lg p-5'>
            <div >
                <h2 className=' text-lg font-semibold text-[#2F80ED]'>Credit Hour Remaining 7 hr</h2>
                <hr className='border my-4' />
            </div>
            <div>
                <h2 className=' text-xl font-semibold'>Course Name</h2>
                <hr className='border my-4' />
            </div>
            <div>
                <h2 className=' font-semibold text-gray-500'>Total Credit Hour : 13</h2>
                <hr className='border my-4' />
            </div>
            <div>
                <h2 className=' font-semibold text-gray-500'>Total Price : 48000 USD</h2>
                <hr className='border my-4' />
            </div>

        </div>
       </div>
    );
};

CourseLists.propTypes = {

};

export default CourseLists;