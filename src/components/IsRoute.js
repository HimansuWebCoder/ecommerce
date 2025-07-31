import {useLocation} from "react-router";
function IsRoute({route}) {
  const location = useLocation();
  return route.includes(location.pathname);
}

export default IsRoute;
