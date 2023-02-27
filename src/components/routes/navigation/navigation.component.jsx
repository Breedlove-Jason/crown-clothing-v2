import {Outlet, Link} from "react-router-dom";
import React from "react";
import {Fragment} from "react";
import {ReactComponent as CrwnLogo} from "../../../assets/crown.svg";
import './navigation.styles.scss';

function Navigation() {
    return (
        <Fragment>
            <div className={'navigation'}>
                <Link className={'logo-container'} to={'/'}>
                    <div>
                        <CrwnLogo className={'logo'} />
                    </div>
                </Link>
                <div className="nav-links-container"></div>
                <Link className={'nav-link'} to={'/shop'}>Shop</Link>
                <Link className={'nav-link'} to={'/sign-in'}>Sign In</Link>

            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;