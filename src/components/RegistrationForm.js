import React from 'react';
import './RegistrationForm.css'; 

export default function RegistrationForm() {
    return (
        <div className='RegistrationForm'>

            {/* About */}

            <div className='about'>
                <div className='box'></div>
                <h3> About </h3>
            </div>
            
            <form className="inputs">
                <input type="text" placeholder="Enter Organaization Name"  className='input'/>
                <input type="text" placeholder="Headquater Location" className='input'/>
                <br/>
                <input type="text" placeholder="Active Since(Year)" className='input'/>
                
                    <label htmlFor="options"></label>
                    <select id="options" name="options" className='input'>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                
                <br/>
                <input type="text" placeholder='Description' id='description'/>
            </form>


            {/* Cause Area */}

            <div className='about'>
                <div className='box'></div>
                <h3> Cause Area </h3>
            </div>
            
            <form className="inputs">
                <input type="text" placeholder="Sectors"  className='input'/>
                <input type="text" placeholder="Other Sectors" className='input'/>
                <br/>
            </form>


            {/* Vision and mission */}


            <div className='about'>
                <div className='box'></div>
                <h3> Vission & Missions </h3>
            </div>
            
            <form className="inputs">
                <input type="text" placeholder='Vision of your Organaization' id='description'/>
                <input type="text" placeholder='Missions of your Organaization' id='description'/>
                <br/>
            </form>
            
        </div>
    );
}
