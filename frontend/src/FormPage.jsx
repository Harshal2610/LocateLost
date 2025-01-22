import Navbar from "./Navbar";
import Form from "./Form";
import { Link } from "react-router-dom";

function Formpage(){
   return (
    <div>
      <Navbar/>
      <Form/>
      <Link to="/searchform">Search Form</Link>
    </div>
  );
}

export default Formpage