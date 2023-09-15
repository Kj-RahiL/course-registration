
import PropTypes from 'prop-types';


const CourseLists = ({ courseList, totalPrice, credit, creditRemaining }) => {
    
    // console.log(courseList)
    return (
        <div className='w-1/4 ml-5'>
            <div className=' bg-white rounded-lg p-4'>
                <div >
                    <h2 className=' text-lg font-semibold text-[#2F80ED]'>Credit Hour Remaining {creditRemaining} hr</h2>
                    <hr className='border my-4' />
                </div>
                <div>
                    <h2 className=' text-xl font-semibold'>Course Name.</h2>
                    <div className="pt-5 pl-5">
                        {
                            courseList.map((list, idx) => <li key={idx} className=' list-decimal text-gray-500'>{list.course_name}</li>)
                        }
                    </div>


                    <hr className='border my-4' />
                </div>
                <div>
                    <h2 className=' font-semibold text-gray-500'>Total Credit Hour : {credit}</h2>
                    <hr className='border my-4' />
                </div>
                <div>
                    <h2 className=' font-semibold text-gray-500'>Total Price : {totalPrice.toFixed(2)} USD</h2>
                    <hr className='border my-4' />
                </div>

            </div>
        </div>
    );
};

CourseLists.propTypes = {
    courseList: PropTypes.array,
    totalPrice: PropTypes.number,
    credit: PropTypes.number,
    creditRemaining: PropTypes.number
};

export default CourseLists;