import { Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from './Pages/LandingPage';
import SignIn from './Pages/SignInPage';
import SignUp from './Pages/SignUpPage';
import UserPage from './Pages/UserPage';
import 'primeicons/primeicons.css';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <LandingPage /> } />
        <Route path='/SignIn' element={ <SignIn /> } />
        <Route path='/SignUp' element={ <SignUp /> } />
        <Route path='/UserPage' element={ <UserPage /> } />
      </Routes>
    </>
  );
}

export default App;
