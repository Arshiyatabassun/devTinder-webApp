
import { BrowserRouter,Route , Routes} from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import "./index.css" 
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";


function App() {
 
  return (
    <div>
        
    <Provider store ={appStore}>
      <BrowserRouter basename ="/">
        <Routes>
            <Route path="/" element={<Body />}>    
            <Route path="/" element={<Feed />}/>      
            <Route path="/login" element={<Login />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/requests" element={<Requests />}/>
            <Route path="/connections" element={<Connections />}/>
            
            </Route>

        </Routes>
        </BrowserRouter>
        </Provider>
    
 </div>
  
  )
}

export default App;
