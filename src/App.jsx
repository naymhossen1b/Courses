import "./App.css";
// import Cart from './Components/Cart/Cart'
import Courses from "./Components/Courses/Courses";

function App() {
  return (
    <>
      <div className=" bg-gray-200 rounded-xl space-y-8">
        <h1 className="text-4xl font-bold text-center pt-12 ">
          Course Registration
        </h1>

        <Courses></Courses>
      </div>
    </>
  );
}

export default App;
