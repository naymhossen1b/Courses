import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { FiDollarSign } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectCours, setSelectedCourses] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [prices, setTotalPrices] = useState(0);

  useEffect(() => {
    fetch("./Data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  // Create a handale click button
  const handleCourses = (sector) => {
    const isCredit = selectCours.find((price) => price.id == sector.id);
    // console.log(isCredit);
    let time = sector.course_credit_time;
    let price = sector.course_price;
    // console.log(cost);

    if (isCredit) {
      toast.warn("Alrady Booked!");
    } else {
      selectCours.forEach((money) => {
        price = price + money.course_price;
        time = time + money.course_credit_time;
      });
      const totalRemaining = 20 - time;
      if (time > 20) {
        toast.warn("Credit Limite Over!");
      } else {
        setCredit(time);
        setTotalPrices(price);
        setRemaining(totalRemaining);
        setSelectedCourses([...selectCours, sector]);
      }
    }
  };

  return (
    <div>
      <div className="lg:flex grid  gap-2 w-11/12 mx-auto pb-8">
        <div className="grid md:grid-cols-3 gap-4 space-y-3 lg:w-2/3 ">
          {courses.map((sector) => (
            // <div key={sector.id} className="bg-white p-2 rounded-xl h-44">
            //   <img className="rounded-xl w-11/12 mx-auto h-36" src={sector.course_cover} alt="" />

            //   <div className="mt-5">
            //   <h2 className="font-bold">{sector.course_title}</h2>
            //   </div>
            // </div>

            // main function

            <div
              key={sector.id}
              className="rounded-xl  bg-white shadow-xl p-2 space-y-5"
            >
              <img
                src={sector.course_cover}
                alt="Shoes"
                className="rounded-xl w-full h-40 "
              />
              <div className="items-center">
                <h2 className="font-bold">{sector.course_title}</h2>
                <p className="pt-3">
                  {sector.course_description.slice(0, 100)}
                </p>

                <div className="flex justify-between items-center pt-5 font-bold">
                  <div className="flex items-center gap-2">
                    <div>
                      <FiDollarSign></FiDollarSign>
                    </div>
                    <div>Price: {sector.course_price}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <BsBook></BsBook>
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
        <div className="lg:w-1/3">
          <Cart
            selectCours={selectCours}
            credit={credit}
            remaining={remaining}
            prices={prices}
          ></Cart>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Courses;
