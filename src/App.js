import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Pages/Home/Login/Login/Login';
import Register from './Pages/Home/Login/Register/Register';
import Navigation from './Pages/Shared/Navigation/Navigation';
import AuthProvicer from './context/AuthProvider/AuthProvicer';
import ExploreAll from './Pages/ExploreAll/ExploreAll';
import SingleDetails from './Pages/SingleDetails/SingleDetails';
import PrivateRoute from './Pages/Home/Login/PrivateRoute.js/PrivateRoute';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import MyOrders from './Pages/DashBoard/MyOrders/MyOrders';
import AddingProduct from './Pages/Home/Admin/AddingProduct/AddingProduct';
import ManageAllOrders from './Pages/Home/Admin/ManageAllOrders/ManageAllOrders';
import ManageProducts from './Pages/Home/Admin/ManageProducts/ManageProducts';
import MakeAdmin from './Pages/Home/Admin/MakeAdmin/MakeAdmin';

function App() {
  return (
    <AuthProvicer>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/manageAllorders">
            <Navigation />
            <ManageAllOrders />
          </Route>
          <Route path="/addingProduct">
            <Navigation />
            <AddingProduct />
          </Route>
          <Route path="/manageProducts">
            <Navigation />
            <ManageProducts />
          </Route>
          <Route path="/makeadmin">
            <Navigation />
            <MakeAdmin />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/explore">
            <Navigation />
            <ExploreAll />
          </Route>
          <Route path="/login">
            <Navigation />
            <Login />
          </Route>
          <Route path="/register">
            <Navigation />
            <Register />
          </Route>
          <PrivateRoute path="/singledetails/:serviceId">
            <Navigation />
            <SingleDetails />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <DashBoard />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/myorders/:userEmail">
            <MyOrders />
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthProvicer>


  );
}

export default App;
