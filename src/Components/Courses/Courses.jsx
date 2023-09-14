import { useEffect, useState } from "react";
// import { FiDollarSign } from 'react-icons/fa';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./Data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 space-y-3 bg-gray-400">
        {
            courses.map((sector) => (
                <div key={sector.id} className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={sector.course_cover}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center ">
            <h2 className="card-title">{sector.course_title}</h2>
            <p>{sector.course_description}</p>
        
          <div className="flex justify-between items-center">
          <div>
                <div></div>
                <div>Price: {sector.course_price}</div>
            </div>
            <div>
                {/* <div> <FiDollarSign></FiDollarSign> </div> */}
                <div>Credit: {sector.course_credit_time}hr</div>
            </div>
          </div>
            <div className="card-actions">
              <button className="btn btn-primary">Select</button>
            </div>
          </div>
        </div>
            ))
        }
      </div>
    </div>
  );
};

export default Courses;
