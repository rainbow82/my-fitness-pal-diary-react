import React from 'react';
import ReactDOM from 'react-dom';
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
        <div className='profileSectionTitle'>
            <h3>Your Daily Summary</h3>
        </div>
    )
}

function ProfileImageSection(){
    return(
        <div className='img-column'></div>
    )
}

class ProfileBody extends React.Component{
    render(){
        return(
                <div className='img-section'>
                    <ProfileImageSection/>
                </div>
        )
    }
}

class ProfileSection extends React.Component{
    render(){
        return(
            <div className='row'>
                <div className='column'>
                <div className='profile-section'>
                    <ProfileSectionTitle />
                    <ProfileBody/>
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