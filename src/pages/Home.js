import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import Header from '../components/Home/Header'
import Information from '../components/Home/Information'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Navigation></Navigation>
                <Header></Header>
                <Information></Information>
            </div>
        )
    }
}
