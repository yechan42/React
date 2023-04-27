import { useState } from "react";

function LoginController(props){
const [isLoggedIn,setIsLoggedIn] = useState(false);

const handleLoginClick = () => {
    setIsLoggedIn(true);
}
const handleLogoutClick = () => {
    setIsLoggedIn(false);
}

let button;
if (isLoggedIn){
    button = <LogoutButton onClick={handleLogoutClick}/>;
}else{
    button = <LoginButton onClick={handleLoginClick}/>;
}
return (
    <div>
       < Greeting isLoggedIn={isLoggedIn}/>
       {isLoggedIn
       ?<LogoutButton onClick={handleLogoutClick}/>
    :<LoginButton onClick={handleLoginClick}/>}
    </div>
)
}
