
# Course Registration

### Describe to my Project features..!!

- This is react project. In this projects style for used tailwind CSS. This project have nine course.
- We can't select course name once more. If we select button 2nd time it's give a toast to validation.
- This courses have credit hour limits to 20hour. If we reached  total creadit hourse 20 more like 21hr, 22hr+  and creadit hour remaining less than 0hr, it's give us a toast.


### Discuss how you managed the state in my assignment project

**Here are some common appraches to managing state in a React Project**

#### 1. API components with `useState` and `useEffect` hook.

- First import the neccessary modulas in react components.
```bash
    import { useState } from 'react';
    import { useEffect } from 'react';
```
- Create to function components and using the useState hook.

```bash
    const Courses = ({handleSelect}) => {
    const [courses, setCourses] = useState([])
```
- Inside function component using useEffect to make request public folder to my api. And using the fetch to convert json to object.
```bash
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
```
- using map to setdata to others component and return it.
```bash
    courses.map(course => <Course 
                        key={course.id} 
                        course={course}
                        handleSelect={handleSelect}
                    ></Course>)
````
- for error handling using propTypes
```bash
    Courses.propTypes = {
    handleSelect: PropTypes.func
};
```
