import {Outlet, Link} from "react-router-dom";
import React from "react";
import {Fragment} from "react";

function Navigation() {
    return (
        <Fragment>
            <div className={'navigation'}>
                <Link className={'logo-container'} to={'/'}><div>Logo</div> </Link>
                <div className="nav-links-container"></div>
                <Link className={'nav-link'} to={'/shop'}>SHOP</Link>

            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;