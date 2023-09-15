
import './App.css'
import CourseLists from './components/CourseLists/CourseLists'
import Courses from './components/Courses/Courses'

function App() {


  return (
    <div className='mx-14'>

      <div className="text-center mt-10">
        <h1 className=' text-4xl font-bold '>Course Registration</h1>
      </div>
      <div className='mt-8 w-full border-2 flex'>
        <Courses></Courses>
        <CourseLists></CourseLists>
      </div>

    </div>
  )
}

export default App
