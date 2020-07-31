import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {
    let Dialogs = () => <DialogsContainer/>
    let ProfileComponent = () => <Profile/>

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs" render={Dialogs}/>
                    <Route path="/profile" render={ProfileComponent}/>
                    <Route path="/music" render={() => <Music/>}/>

                    <Route path="/users" render={() => <UsersContainer/>}/>

                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );

}
export default App;
