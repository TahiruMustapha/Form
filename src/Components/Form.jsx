import React from 'react'
import "./Form.scss"
const Form = () => {
  return (
    <div>
    <div className="formContainer1">
        <div className="formContainer2">
        <div className="formBox">
        <h2>Apply Online</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Nesciunt totam iste quam iure numquam odit hic sint qui,
                  magnam libero natus sequi molestiae harum assumenda 
                  aspernatur.
            </p>

            <form>
                
                 
                  <p id='input-row'>
                    
                         {/* <label>Your Name</label>  */}
                        <input type="text" placeholder='First name' />
                    
             
                  
                      {/* <label>Surname</label> */}
                  <input type="text" placeholder='Last name' />
                    
                  
                  </p>
                
                  
                
                
                <p className='email'>
                {/* <label>Your Email</label> */}
                <input type="email" placeholder='Email' /> 
                </p>

                 
                 <p id='input-row'>
                 {/* <label>Role Reference</label> */}
                <input type="text" placeholder='INC-JSS-JUNE-19' />
                 

               
                 {/* <label>Role</label> */}
                <input type="text" placeholder='State' />
                 </p>
                 
      
                <p className='FormButton'>
                <button type='submit' >Submit Button</button>
                </p>
                
            </form>
        </div>
        </div>
       
            

        
    </div>
    </div>
  )
}

export default Form
