import './App.css';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import SingleBooking from './components/SingleBooking/SingleBooking';
import AddBooking from './components/AddBooking/AddBooking';
import MyBookings from './components/MyBookings/MyBookings';
import ManageBookings from './components/ManageBookings/ManageBookings';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/place-order/:bookingId">
              <SingleBooking></SingleBooking>
            </PrivateRoute>
            <Route path="/addnewbooking">
              <AddBooking></AddBooking>
            </Route>
            <Route path="/my-bookings">
              <MyBookings></MyBookings>
            </Route>
            <Route path="/manage-bookings">
              <ManageBookings></ManageBookings>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
