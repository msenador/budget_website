import React, {useState} from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import SignIn from "../../budget_website/src/components/SignIn";
import Register from "../../budget_website/src/components/Register";
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';


function App() {
  const [user, setUser] = useState(null);

  const updateUser = (email) => {
    setUser(email);
  }

  return (
      <>
      <div>
        {console.log(user)}
      </div>
        <BrowserRouter>
          <Switch>
            <Route exact path={'/'}>
              {!user && <Redirect to={'/register'}/>}
              <div>
                <Link to={user ? `/userid-${user}` : '/register'}><MonetizationOnOutlinedIcon/></Link>
                <Link to={'/sign-in'}>Sign In</Link>
                <Link to={'/register'}>Register</Link>
              </div>
            </Route>

            <Route path={'/sign-in'}>
              <SignIn user={user} updateUser={updateUser}/>
            </Route>
            <Route path={'/register'}>
              <Register user={user}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </>
  );
}

export default App;