import React, {useState} from "react";
import n from "./registration.module.css"
import Login from "../Login/login"
import {Link} from "react-router-dom";
import iisLogo from "../../img/IIS logo.png"

const Registration = () => {
    return (
        <body className={n.body}>
        <header className="header-top" aria-label="menu">
            <div className="container">

            </div>
        </header>
        <main className={n.formSignin}>
            <form>
                <img className={n.logoMenu} src={iisLogo} alt="iis-logo"/>
                <h2 className={n.title}>Регистрация</h2>
                <div className={n.formFloating}>
                    <input type="email" className={n.formControl} id="floatingInput" placeholder="Почта..."/>
                    <label htmlFor="floatingInput"></label>
                </div>
                <div className={n.formFloating}>
                    <input type="password" className={n.formControl} id="floatingPassword" placeholder="Пароль..."/>
                    <label htmlFor="floatingPassword"></label>
                </div>
                <div className={n.formFloating}>
                    <input type="text" className={n.formControl} id="floatingName"
                           placeholder="Иванов Иван Иванович..."/>
                    <label htmlFor="floatingName"></label>
                </div>
                <div className={n.formCheck}>
                    <input className="form-check-inline" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className={n.formCheckLabel} htmlFor="flexCheckDefault">
                        Я сейчас учусь
                    </label>
                </div>
                <Link to="/profile">
                    <button className={n.btn} type="submit">ЗАРЕГИСТРИРОВАТЬСЯ</button>
                </Link>
                <br/>
                <a className={n.link} href="/login">Войти</a>
            </form>
        </main>
        </body>
    )
}

export default Registration;