import React, {Component} from 'react';
import './MainPage.scss'
import Header from "../Header/Header";

class MainPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Header showFilters={true}/>
                <div>
                    <p>Main</p>
                </div>
            </React.Fragment>
        );
    }
}

export default MainPage;