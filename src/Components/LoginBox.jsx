import React from 'react';


function App() {
    
  return (
    <div className="container">
      
      <div className="column">
        
        <h1>Welcome back</h1>
        <p>Welcome! Please enter your details</p>
         
          {/* Registration Form */}
          <form className="vertical-form">
          
            <div className="form-group">
              <p1>Email</p1><br/>
              <input type="email" placeholder="Enter your Email Address" />
            </div>
            <div className="form-group">
              <p2>Password</p2><br/>
              <input type="password" placeholder="********" />
            </div>
            
            <div className='forgot-pwd'>
              <a href="#">Forgot Passwod?</a>
            </div>
            <div className="form-group">
              <button type="submit">Login</button>
            </div>
            {/* Sign Up with Google */}
            <div className="google-signup">
              
            <a href="#" className="google-link">
           <i class="fa fa-google "></i>    Sign in with Google</a>
        
         </div>
          <div className='loginpage'>
            <p>Don't have an acoount yet?<a href='#'>Sign Up</a></p> 
          </div>
          </form>
         
          
       
        
      </div>
      <div className="column">
        {/* Content for the first half */}
        <img src ="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?size=626&ext=jpg&ga=GA1.2.1855786848.1675266267&semt=sph"></img>
      </div>
    </div>
  );
}

export default App;
