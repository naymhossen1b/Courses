/* eslint-disable react/prop-types */
const Cart = ({ selectCours, credit, remaining }) => {
  return (
    <div>
      <div className="bg-white p-5 w-11/12 mx-auto rounded-xl mt-8">
        <h3 className="text-2xl font-bold text-[#2F80ED]">
          Credit Hour Remaining: {remaining}hr
        </h3>
        <div className="border border-b-2 mt-5"></div>
        <div className="pt-5">
          <h3 className="text-black text-2xl font-bold pb-8">
            Course Name
          </h3>
        </div>

        {selectCours.map((cours) => (
          <li key={cours.id} className="text-black">
            {cours.course_title}
          </li>
        ))}

        <h3 className="mt-5 text-2xl font-semibold">Total Credit Hour: {credit} </h3>
        <div className="border border-b-2 mt-5"></div>
        <h3 className="mt-5 text-2xl font-semibold">Total Price :USD</h3>
      </div>
    </div>
  );
};

export default Cart;
