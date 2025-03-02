
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import "./index.css" 
import Body from "./Body";
function App() {
 

  return (
    <>
      <BrowserRouter basename ="/">
        <Routes >
            <Route path="/"element={<Body />}></Route>
            <Route path="/login"element={<Login />}></Route>
            <Route path="/profile"element={<Profile />}></Route>

        </Routes>
        </BrowserRouter>
    
 
    </>
  )
}

export default App
