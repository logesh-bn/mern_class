import "../style/Login.css";
function Login(){
    return(
        <>
            <h1 className="login">login</h1>
            <input type="text" placeholder="Enter username"/>
            <input type="password" placeholder="password"/>
            <input type="submit" value="Login"/>        
        </>
    )
}

export default Login;