import React from 'react';

export class CalculationSection extends React.Component{
    render(){
        return(
            <div>
                <div className='row'>
                    <div className='col-md-2'>
                        <div>1200</div>
                    </div>
                    <div className='col-md-2'>
                        <p>0</p> 
                    </div>
                    <div className='col-md-2'>
                        <p>-</p>
                    </div>
                    <div className='col-md-2'>
                        <p>0</p> 
                    </div>
                    <div className='col-md-2'>
                        <p>=</p>
                    </div>
                    <div className='col-md-2'>
                        <p>0</p> 
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <p>Goal</p>
                    </div>
                    <div className='col-md-3 col-md-pull-1'>
                        <p>Food</p>
                    </div>
                    <div className='col-md-3'>
                        <p>Exercise</p>
                    </div>
                    <div className='col-md-3 col-md-push-1'>
                        <p>Net</p>
                    </div>
                </div>
                
            </div>
        )
    }
}