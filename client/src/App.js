// import './App.css';

import AddUser from "./components/AddUser";
import UserRegister from "./components/UserRegister";
import Form from "./components/Form";
import Question from "./components/Question";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* <Route exact path="/addUser" element={<AddUser />}></Route> */}
        <Route exact path="/addUser" element={<UserRegister />}></Route>
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/question" element={<Question />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;



