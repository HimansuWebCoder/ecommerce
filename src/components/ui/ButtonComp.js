import {Link} from "react-router";

function ButtonComp({linkname, route, buttonStyle, buttonContainerStyle}) {
    return (
        <div className={`${buttonContainerStyle}`}>
           <button className={`${buttonStyle}`}>
            <Link to={`/${route}`}>{linkname}</Link>
          </button>
        </div>
        
    )
}

export default ButtonComp;