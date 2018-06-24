import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import {CalculationSection} from './calculationSection.js';
import {ProfileBody} from './profileBody.js';
import './index.css';

function Title(){
    return(
        <div className='title'>
            <h1>My Fitness Pal Diary</h1>
        </div>
    )
}

function ProfileSectionTitle(){
    return(
        <div className=' row profileSectionTitle'>
            <div className='col-md-12'>Your Daily Summary</div>
        </div>
    )
}

class ProfileSection extends React.Component{
    render(){
        return(
            <div>
                    <ProfileSectionTitle />
                    <div className='row'>
                        <ProfileBody/>
                    </div>

               
            </div>
        )
    }
}

class QuickAddSection extends React.Component{
    render(){
        return(
            <div>
                <div className='row'>
                    <div className='jumbotron'>
                        <div className='row'>
                        <div className='quick-add-title'>Quick Add</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='row quick-add-row'>Yogurt</div>
                                <div className='row quick-add-row'>Granola</div>
                                <div className='row quick-add-row'>Apple</div>
                                <div className='row quick-add-row'>Chicken Wrap</div>
                            </div>
                            <div className='col-md-4'>
                                <div className='row quick-add-row'>70</div>
                                <div className='row quick-add-row'>130</div>
                                <div className='row quick-add-row'>80</div>
                                <div className='row quick-add-row'>210</div>
                            </div> 
                            <div className='col-md-4'>
                                <div className='row quick-add-row-button'><button className='quick-add-button'>Add</button></div>
                                <div className='row quick-add-row-button'><button className='quick-add-button'>Add</button></div>
                                <div className='row quick-add-row-button'><button className='quick-add-button'> Add</button></div>
                                <div className='row quick-add-row-button'><button className='quick-add-button'>Add</button></div>
                            </div> 
                        </div>
                    </div>   
                </div>
            </div>
        )
    }
}

class App extends React.Component{
    render(){
        return(
            <div className='app'>
                <Title />
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6  profile-section'>
                            <ProfileSection />
                        </div>
                        <div className='col-md-4 col-md-push-1'>
                            <QuickAddSection/>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
    
)