import Formpage from "./FormPage";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import SearchForm from "./SearchForm";
// import Fetchdata from "./Fetchdata";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route index element={<Navigate replace to="formpage" />} />
      <Route path="formpage" element={<Formpage/>}/>
      <Route path="searchform" element={<SearchForm/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
