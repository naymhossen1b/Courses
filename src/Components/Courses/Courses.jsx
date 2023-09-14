import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { FiDollarSign } from "react-icons/fi";
import { BsBook } from "react-icons/bs";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectCours, setSelectedCourses] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    fetch("./Data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  // Create a handale click button
  const handleCourses = (sector) => {





    const isCredit = selectCours.find( (price) => price.id == sector.id)
    console.log(isCredit);
    let cost = sector.course_price;
    // console.log(cost);
    if(isCredit){
      alert("Limite Out");
    }else{
      selectCours.forEach(money => {
        cost = cost + money.course_price;
      });
      const totalRemaining = 20 - cost;
      if( cost > 20){
        alert("limited Budget")
      }else{
        setCredit(cost);
        setRemaining(totalRemaining);

    setSelectedCourses([...selectCours, sector]);
        
      }
    }
  };

  return (
    <div>
      <div className="flex gap-2 w-11/12 mx-auto">
        <div className="grid md:grid-cols-3 gap-4 space-y-3 w-2/3 ">
          {courses.map((sector) => (
            <div
              key={sector.id}
              className="rounded-xl bg-white shadow-xl p-2 space-y-5"
            >
              <img
                src={sector.course_cover}
                alt="Shoes"
                className="rounded-xl w-full h-40"
              />
              <div className="items-center ">
                <h2 className="font-bold">{sector.course_title}</h2>
                <p className="pt-3">
                  {sector.course_description.slice(0, 100)}
                </p>

                <div className="flex justify-between items-center pt-5 font-bold">
                  <div className="flex items-center gap-2">
                    <div>
                      {" "}
                      <FiDollarSign></FiDollarSign>{" "}
                    </div>
                    <div>Price: {sector.course_price}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      {" "}
                      <BsBook></BsBook>{" "}
                    </div>
                    <div>Credit: {sector.course_credit_time}hr</div>
                  </div>
                </div>
                <div className="mt-5 flex justify-center">
                  <button
                    onClick={() => handleCourses(sector)}
                    className="bg-[#2F80ED] text-white btn w-full"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Cart section box */}
        <div className="w-1/3">
          <Cart selectCours={selectCours} credit={credit} remaining={remaining}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Courses;
