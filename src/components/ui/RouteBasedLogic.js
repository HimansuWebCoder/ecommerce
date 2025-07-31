import { useLocation } from "react-router";
function RouteBasedLogic({route, ComponentName}) {
	const location = useLocation();
	const IsRoutePageName = location.pathname.startsWith(route)
	return (
          <div>
          	 {IsRoutePageName && <ComponentName/>}
          </div>
		)
}

export default RouteBasedLogic;
