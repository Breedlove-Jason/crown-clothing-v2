import Categories from "../../categories/categories.component";
import {Outlet} from "react-router-dom";

function Home () {


    return (
        <div>
            <Outlet/>
            <Categories/>
        </div>
    );
}

export default Home;
