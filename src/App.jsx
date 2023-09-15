
import { useState } from 'react'
import './App.css'
import CourseLists from './components/CourseLists/CourseLists'
import Courses from './components/Courses/Courses'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [courseList, setCourseList] = useState([])

  const handleSelect = course => {
    const isExist = courseList.find(item => item.id === course.id)
    if (isExist) {
      toast('already booked')
    } else {
      const newList = [...courseList, course]
      setCourseList(newList)
    }


  }


  return (
    <div className='mx-14'>

      <div className="text-center mt-10">
        <h1 className=' text-4xl font-bold '>Course Registration</h1>
      </div>
      <div className='mt-8 w-full border-2 flex'>
        <Courses handleSelect={handleSelect}></Courses>
        <CourseLists courseList={courseList}></CourseLists>
        <ToastContainer></ToastContainer>
      </div>

    </div>
  )
}

export default App
