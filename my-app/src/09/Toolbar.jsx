function Toolbar(props){
    const { isLoggedIn, onClickLogout} = props;
    return (
        <div style={{padding : 10}}>
            {isLoggedin && <span>환영합니다~ </span>}
            {isLoggedin ?
            <button onClick={onClickLogout}>로그아웃</button>
        :
        <button onClick={onClckLogin}>로그인</button> 
            }
        </div>
    );

    }
export default Toolbar;