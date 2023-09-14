import Home from './routes/home/home.component'
import SignIn from './routes/sign_in/sign_in.component'
import Navigation from'./routes/Navigation/Navigation.component'
import { Routes , Route } from 'react-router-dom';

const Shop = ()=>{
  return(
    <h1>This is Shop Page </h1>
  );
};

const App = () => {
  
  return (
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home/>} />
          <Route path='shop' element={<Shop />}/>
          <Route path='sign-in' element={<SignIn />}/>
        </Route>
      </Routes>
  );
};

export default App;
