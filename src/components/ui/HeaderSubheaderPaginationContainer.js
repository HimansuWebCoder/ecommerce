import HomeHeader from "./HomeHeader"
import SubHeader from "./SubHeader"
function HeaderSubheaderPaginationContainer({header, subheader}) {
    return (
       <div className="">
            <SubHeader name={subheader}/>
            <HomeHeader name={header}/>
       </div>
    )
}

export default HeaderSubheaderPaginationContainer;