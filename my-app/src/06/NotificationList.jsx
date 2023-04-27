import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {   
        id: 1,
        message: "안녕하세요 맥도날드 성균관대점 입니다.",
    },
    {
        id: 2,
        message: "무엇을 도와 드릴까요.",
    },
    {
        id: 3,
        message: "저희 매장에서 제일 인기있는 메뉴는 상하이버거 입니다.",
    },
];
let timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
        notifications: [],
    }
}
componentDidMount(){
    console.log('componentDidMount()');
    const {notifications} = this.state;
    timer = setInterval(() =>{
        if (notifications.length < reservedNotifications.length) {
            const index = notifications.length;
            notifications.push(reservedNotifications[index]);
            this.setState({
                notifications: notifications,
            });
        }else {
            
            
            clearInterval(timer);
        }
    }, 1000);
    
}

render() {
    return (
        <div>
            {this.state.notifications.map((notification)=>{
                return( <Notification
                key={notification.id}
                id={notification.id}
                 message={notification.message}
                 />
                 );
            })}
        </div>
    );
        }
    }
    export default NotificationList;

        
