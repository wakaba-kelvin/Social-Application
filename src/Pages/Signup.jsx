import React from 'react'

function Signup() {
  return (
    <div className="signup">
        <div className="signup-container">
            <form action="submit">
                <div className="names">
                <label htmlFor="First-Name">First Name</label>
                <input className='Firstname' type="text" placeholder='First Name' />
                <label htmlFor="Last Name"> Last Name:</label>
                <input type="text" placeholder='Last Name' />
                </div>
                <div className="emailz">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Email' />
                </div>
                <div className="phone-Number">
                    <label htmlFor="Phone Number">
                        Phone Number
                    </label>
                    <input type="text" placeholder='Phone Number' />
                </div>
                <div className="pass">
                    <label htmlFor="Password">Password</label>
                    <input type="Password" placeholder='password' />
                </div>
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Signup
