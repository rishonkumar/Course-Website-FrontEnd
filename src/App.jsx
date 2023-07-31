import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import NavBar from "./NavBar.jsx";
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";

function App() {

    return (
        <>
            <Router>
                <NavBar/>
                <Routes>
                    <Route path={"/signin"} element={<Signin/>}/>
                    <Route path={"/signup"} element={<Signup/>}/>

                </Routes>
            </Router>

        </>
    )
}

export default App
