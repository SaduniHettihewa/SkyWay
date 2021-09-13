import React from 'react'
import Body from './Body'
import ModelForm from './Body/ModelForm'
import './Dashboard.css'
import Footer from './Footer'
import Header from './Header'

function Dashboard() {
    return (
        <div className="dashboard">
            <div>
                <Header/>
            </div>
            <div>
                <Body/>
                {/* <div>
                    <ModelForm/>
                </div> */}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Dashboard
