import React from 'react'
import "./Sigin.scss"

function Signin() {
  return (
  <div className="signin">
    <div className="inputs">
    <form action="submit">
      <div className="animation">
        <h2>Welcome to Connect ME</h2>

      </div>
    <label htmlFor="Username"></label>
      <input className='Username' placeholder='username' type="text"  />
      <label htmlFor="Username"></label>
      <input type="Password" placeholder='Enter your Password'/>
      <button>Submit</button>
      <p>Forgot Password</p>
      <p>If youre new here? <br /> create an account</p>
    </form>
    </div>
  </div>
  )
}

export default Signin
