import React, { Fragment } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Paragraph from "./Paragraph";
import Square from "./Square";
import Square2 from "./Square2"
import Counter from "./Counter";
import Counter2 from "./Counter2";
import FourOhFour from "./FourOhFour";
import List from "./List";
import List2 from "./List2";
import Password from "./Password";
import StepCounter from "./StepCounter";
import StepCounter2 from "./StepCounter2";
import Progress from "./Progress";
import CatchMeIfYouCan from "./CatchMeIfYouCan";
import CatchMe2 from "./CatchMeIfYouCan2";
import PasswordStrength from "./PasswordStrength";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Headline from "./Headline";
import Clicked from "./Clicked";
import Clicked2 from "./Clicked2";
import ToggleText from "./ToggleText";
import ToggleText2 from "./ToggleText2";
import RollCall from "./RollCall";
import RollCall2 from "./RollCall2";
import Length from "./Length"



const App = () => (
  
  <Router>
    
      <Fragment>
        <Navbar></Navbar>
      
        <Switch>
          <Route exact path="/length" component={ Length } />
          <Route exact path="/clicked" component={ Clicked } />
          <Route exact path="/clicked2" component={ Clicked2 } />
          <Route path="/square/:colour" render={ ({ match }) => (
            <Square squareColour={ match.params.colour } />
          ) } />
          <Route exact path="/square2">
             <Square2
               colour= "hotpink"
              />
          </Route>
          <Route exact path="/counter">
            <Counter 
              initial={ 5 }
              max={ 10 }
            />
          </Route>
          <Route exact path="/counter2">
            <Counter2 
              initial={ 5 }
              max={ 10 }
            />
          </Route>
          <Route exact path="/steps">
            <StepCounter 
              max={ 100 }
              step={ 5 }
             />
          </Route>
          <Route exact path="/steps2">
            <StepCounter2 
              max={ 100 }
              step={ 5 }
             />
          </Route>
          <Route exact path="/catch"> 
            <CatchMeIfYouCan 
              jump={ 100 }
            />
          </Route>
          <Route exact path="/catch2"> 
            <CatchMe2 
              jump={ 100 }
            />
          </Route>
          <Route exact path="/roll">
            < RollCall 
            names= { ["Jack", "Nancy", "Joe", "Kate", "Josh"] }
            />
          </Route>
          <Route exact path="/roll2">
            < RollCall2 
            names= { ["Jack", "Nancy", "Joe", "Kate", "Josh"] }
            />
          </Route>
          <Route exact path="/toggle" component={ ToggleText } />
          <Route exact path="/toggle2" component={ ToggleText2 } />
          <Route exact path="/prog" component={ Progress } />
          <Route exact path="/carousel" component={ Carousel } />
          <Route exact path="/headline" component={ Headline } />
          <Route exact path="/par" component={ Paragraph }/>
          <Route exact path="/list" component= { List }/>
          <Route exact path="/list2" component= { List2 }/>
          <Route exact path="/pass" component= { Password }/>
          <Route exact path="/passwords" component= { PasswordStrength }/>
          <FourOhFour />
        </Switch>
      </Fragment>
  </Router>  
);

export default App;
