
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import Course from '../Course/Course';

const Courses = ({handleSelect}) => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className=' mx-auto w-3/4 md:w-2/4'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8'>
                {
                    courses.map(course => <Course 
                        key={course.id} 
                        course={course}
                        handleSelect={handleSelect}
                    ></Course>)
                }
            </div>
        </div>
    );
};

Courses.propTypes = {
    handleSelect: PropTypes.func
};

export default Courses;