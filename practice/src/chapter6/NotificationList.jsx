import React from "react";
import Notification from "./Notification";

// 실행 과정
// 0. reservationNotifications 변수 할당
// 1. Mount (생성자 - render - componentDidMount)
// 2. Update (componentDidMount가 State를 Update) - Update 시 render 실행
// 3. UnMount (componentWillUnMount)


const reservationNotifications = [
    {
        id : 1,
        message : "안녕하세요 오늘 일정을 알려드립니다.",
    },
    {
        id : 2,
        message : "점심 식사 시간 입니다.",
    },
    {
        id : 3,
        message : "이제 곧 미팅이 시작됩니다.",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notifications : [],
        };
    }
    // Mount
    componentDidMount() {
        const {notifications} = this.state;
        timer = setInterval(() => {
            if(notifications.length < reservationNotifications.length){
                const index = notifications.length;
                notifications.push(reservationNotifications[index]);
                // Update
                this.setState({
                    notifications : notifications,
                });
            }
            else{
                // Timer 제거
                clearInterval(timer);
            }
        }, 1000);
    }
    // UnMount
    // UnMount 이후에는 더이상 Timer가 동작하지 않게 설정
    componentWillUnmount(){
        this.state = {
            notifications : [],
        };
        if(timer){
            clearInterval(timer);
        }
    }
    render(){
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification key={notification.id} id={notification.id} message={notification.message}/>;
                })}
            </div>
        );
    }
}

// 결과적으로 Div 3개 생긴다.
export default NotificationList;