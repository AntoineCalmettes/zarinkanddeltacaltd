import React, { Component } from 'react'
import AOS from "aos";
import logo from "../../assets/logo.png"
export default class Header extends Component {
    componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }
    render() {
        AOS.init()
        return (
            <div>

                <div className="header p-5 text-center bg-image">
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3 fw-bold opacity text-shadow-black ' data-aos="fade-zoom-in"><img className="logo" src={logo}/> Zarink and Deltaca Ltd   <img className="logo" src={logo}/></h1>
                          
                            <h4 className='mb-3 text-shadow-black fw-bold' data-aos="fade-up">Hyjal - Guilde</h4>
                            <a className='btn btn-primary btn-lg' href='#!' role='button' data-aos="flip-left">
                               Rejoindre notre guilde
                            </a>
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}
