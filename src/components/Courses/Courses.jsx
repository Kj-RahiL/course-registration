
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
        <div className=' w-3/4'>
            <div className='grid grid-cols-3 gap-5'>
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