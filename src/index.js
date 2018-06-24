import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
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

function ProfileImageSection(){
    return(
        <div className='img-column'></div>
    )
}

class CaloriesRemainingSecton extends React.Component{
    render(){
        return(
            <div>
                <p>Calories Remaining Change</p>
                <h3>1200</h3>
            </div>
        )
    }
}

class ProfileButtonSection extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <button>Add Exercise</button>
                    <button>Add Food</button>
                </div>
            </div>
        )
    }
}

class ProfileBody extends React.Component{
    render(){
        return(
            <div>
                <div className='col-md-4'>
                    <ProfileImageSection/>
                </div>
                <div className='col-md-8 data-section'>
                    <div className='row'>
                        <div className='col-md-6'>
                        <CaloriesRemainingSecton/>
                        </div>
                        <div className='col-md-6 button-section'>
                            <ProfileButtonSection/>
                        </div>
                    </div>
                    <div className='row'></div>
                
                </div>
                
            </div>
        )
    }
}

class ProfileSection extends React.Component{
    render(){
        return(
            <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6  profile-section'>
                    <ProfileSectionTitle />
                    <div className='row'>
                        <ProfileBody/>
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
                <ProfileSection />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
    
)