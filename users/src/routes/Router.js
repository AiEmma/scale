import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import FirstPage from "../pages/FirstPage/FirstPage"
import SecondPage from "../pages/SecondPage/SecondPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import Header from "../components/header/header"

const Router = () => {
    return (
    <BrowserRouter>
    <Header />
        <Switch>
            <Route exact path="/">
                <FirstPage />
            </Route>
            <Route exact path="/2">
                <SecondPage />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    </BrowserRouter>
    )
}
export default Router