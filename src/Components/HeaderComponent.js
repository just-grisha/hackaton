import React from 'react';
import './HeaderStyle.css'
import {BrowserRouter as Router, Routes ,Route,Link} from 'react-router-dom'
// import RegistrationComponent from './Registration/RegistrationComponent';
// import LoginComponent from './Login/LoginComponent'
// import CreateVisit from './CreateVisit/CreateVisitComponent'
import RegistrationComponent from './RegistrationComponent';
import LoginComponent from './LoginComponent'
function Header() {
    return(
        <>
    <header className="header" id ="header">
        <div className="header__inner">
        <button className="burger" type="button" id ="navToggle">
                <span className="burger__item">Menu</span>
            </button>
            <div className="header__logo">
                <h2>@Sigma</h2>
            </div>
            <nav className="nav" id ="nav">
                <a className="nav__link" href="/myprofile">Профиль</a>
                <a className="nav__link" href="/login" >Мои визитки</a>
                <a className="nav__link" href="/createvisit">Создать визитку</a>
            </nav>
        </div>
    </header>
    <Router>
        <Routes>
        <Route exact path ='/myprofile' component= {<RegistrationComponent/>}/>
            <Route exact path ='/registration' component= {<RegistrationComponent/>}/>
            <Route exact path ='/login' component= {<LoginComponent/>}/>
            <Route exact path ='/createvisit' component= {<RegistrationComponent/>}/>
            <Route exact path ='/myvisits' component= {<RegistrationComponent/>}/>
        </Routes>
    </Router>
    </>
    )
}
export default Header;