import React from 'react';
import {CalculationSection} from './calculationSection.js';

function ProfileImageSection(){
    return(
        <div className='img-column'></div>
    )
}

class CaloriesRemainingSecton extends React.Component{
    render(){
        return(
            <div>
                <div className='caloriesRemainingText'>Calories Remaining <a href='#'>Change</a></div>
                <div className='caloriesTotalNumber'>1200</div>
            </div>
        )
    }
}

class ProfileButtonSection extends React.Component{
    onAddExercise() {
        alert('This will redirect to the full diary page to add in exercise items.');
    }

    onAddFood(){
        alert('This will redirect to the full diary page to add in food items.');
    }

    render(){
        return(
            <div>
                <div>
                    <button className='profileSection-button' onClick={this.onAddExercise}>Add Exercise</button>
                    <button className='profileSection-button' onClick={this.onAddFood}>Add Food</button>
                </div>
            </div>
        )
    }
}

export class ProfileBody extends React.Component{
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