import React, { Fragment } from "react";

import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Clicked from "./Clicked";
import ToggleText from "./ToggleText";
import Counter from  "./Counter";
import StepCounter from "./StepCounter";
import CatchMe from "./CatchMe";
import RollCall from "./RollCall";
import Length from "./Length";
import Password from "./Password";
import List from "./List"


const Stuff = () => (

<Fragment>
    <Header 

        text= "This is a header text"
    
    />

    <Paragraph 

        children= "This is a message"
    
    />

    <Square

        colour= "hotpink"
    
    />

    <People 

        names= { ["Jack", "Nancy", "Joe", "Kate", "Josh"] }
    
    />

    <Clicked />

    <ToggleText />

    <Counter 
    
        initial={ 5 }
        max={ 10 } 
    
    />

    <StepCounter 
        
        initial={ 0 }
        max={ 100 } 
        step={ 5 } 
        
    />

    <CatchMe 
    
        jump={ 100 }
        
    />

    <RollCall 
    
        names={ ["Jack", "Nancy", "Joe", "Kate", "Josh"]  }

    />

    <Length

    />

    <Password 
    
    />

    <List 
    
    />

</Fragment>

);

export default Stuff;