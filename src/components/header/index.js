import './style.css';
import {
    Link,
} from "react-router-dom";


export default function Header (){

    return(
        <div className="header_container">
            <Link  to={'/'}>
                <div className="header_logo"></div>
            </Link>
        </div>

    )
}