import Login from "./Login"
import img from "../assets/react.svg"
function Page(){
    return(
        <div className="cent">
            <img src={img} alt="not found"/>
         <Login/> 
        </div>
    )
}
export default Page;