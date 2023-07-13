import { useContext } from "react";
import { Register,Home,Login } from './components';
import { 
  HashRouter ,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {

  const {currentUser} = useContext(AuthContext)
  
  const ProtectedRoute = ({children}) =>{
    if (!currentUser) {
      return <Navigate to="/login"/>
    }

    return children
  }


  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/">
            <Route index element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
