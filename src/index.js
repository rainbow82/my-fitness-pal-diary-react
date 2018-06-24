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

class CalculationSection extends React.Component{
    render(){
        return(
            <div className='row'>
                <div className='col-md-3'>
                    <p>1200</p><br/>
                    <p>Goal</p>
                </div>
                <div className='col-md-3'>
                    <p>0</p> 
                    <p>-</p><br/>
                    <p>Food</p>
                </div>
                <div className='col-md-3'>
                    <p>0</p> 
                    <p>=</p><br/>
                    <p>Exercise</p>
                </div>
                <div className='col-md-3'>
                    <p>0</p><br/>
                    <p>Net</p>
                </div>
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
                    <div className='row'>
                        <CalculationSection/>
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
                <div className='quick-add-title'>Quick Add</div>
                <div className='row'>
                    <div className='jumbotron'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <p>Food</p>
                            </div>
                            <div className='col-md-4'>
                                <p>Calories</p>
                            </div> 
                            <div className='col-md-4'>
                                <p>Add</p>
                            </div> 
                        </div>
                        <div className='row'>
                            <div className='col-md-4'>
                                
                                
                                <div className='row'>Yogurt</div>
                                <div className='row'>Granola</div>
                                <div className='row'>Apple</div>
                                <div className='row'>Chicken Wrap</div>
                            </div>
                            <div className='col-md-4'>
                            
                                
                                <div className='row'>70</div>
                                <div className='row'>130</div>
                                <div className='row'>80</div>
                                <div className='row'>210</div>
                            </div> 
                            <div className='col-md-4'>
                                <div className='row'><button>Add Me</button></div>
                                <div className='row'><button>Add Me</button></div>
                                <div className='row'><button>Add Me</button></div>
                                <div className='row'><button>Add Me</button></div>
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
                        <div className='col-md-4'>
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