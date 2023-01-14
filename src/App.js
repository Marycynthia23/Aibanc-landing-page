import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Company from "./components/Company";
import ContactUs from "./components/ContactUs";
import FAQPage from "./FAQPage/FAQPage";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path='/faq' element={<FAQPage/>}/>
      <Route path='/company' element={<Company/>}/>
      <Route path='/Contactus' element={<ContactUs/>}/>
      <Route path='/' element={<Home/>}/>

      </Routes>
      </Router>
    </div>
  );
}

export default App;
