
import { useState } from 'react'
import './App.css'
import CourseLists from './components/CourseLists/CourseLists'
import Courses from './components/Courses/Courses'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [courseList, setCourseList] = useState([]);
  const [totalPrice, setTotalPrice] =useState(0);
  const [credit, setCredit] = useState(0);
  const [creditRemaining, setCreditRemaining] = useState(20)

  const handleSelect = course => {
    const isExist = courseList.find(item => item.id === course.id)

    let count = course.price;
    let totalCredit = course.credit;

    if (isExist) {
      return toast('already booked this course')
    } else {
      courseList.forEach(item =>{
        count = count + item.price;
        totalCredit = totalCredit + item.credit
      })
      // console.log(remaining)
      const remaining = 20 - totalCredit;
      if(remaining < 0 ){
       return toast('Oops!!! Your credit hour remaining limits end')
      }
      setCreditRemaining(remaining)
      const newList = [...courseList, course]
      setCourseList(newList)
      setCredit(totalCredit)
      setTotalPrice(count)
    }


  }


  return (
    <div className='mx-14'>

      <div className="text-center mt-10">
        <h1 className=' text-4xl font-bold '>Course Registration</h1>
      </div>
      <div className='mt-8 w-full border-2 flex'>
        <Courses handleSelect={handleSelect}></Courses>
        <CourseLists courseList={courseList} totalPrice={totalPrice}
         credit={credit}
         creditRemaining={creditRemaining}
         ></CourseLists>
        <ToastContainer></ToastContainer>
      </div>

    </div>
  )
}

export default App
