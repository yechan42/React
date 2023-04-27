import React, {useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage(prps){
    const [isLoggedIn, setIsLoggedIn]=useState(false);

    const onClckLogin = () => {
        setIsLoggedIn(true);
    }
    const onClickLogout = () =>{
        setIsLoggedIn(false);
    }
    return (
        <div>
            <Toolbar
            isLoggedIn={isLoggedIn}
            onClckLogin={onClckLogin}
            onClickLogout={onClickLogout}
            />
            <hr />
        <div style={{ padding : 10}}>
             즐거운 리엑트 공부!
            </div>
            </div>
    );
}