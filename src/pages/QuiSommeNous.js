import React from 'react';
import Navigation from '../components/Navigation'
import NotreHistoire from '../components/QuiSommeNous/NotreHistoire';
import Header from '../components/Home/Header';
function QuiSommeNous() {

    return (
        <div>
             <Navigation></Navigation>
             <Header></Header>
             <NotreHistoire></NotreHistoire>
        </div>
    )

}

export default QuiSommeNous;