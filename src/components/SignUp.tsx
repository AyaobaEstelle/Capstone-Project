import React from 'react'

const SignUp = () => {
  return (
    <div className='sign-up'>
         <form action="">
          <h2>Sing up with:</h2>
          <div className="google">
            <img src="./images/google-logo.png" alt="" />
            <p>Google</p>
          </div>
          <div className="apple">
            <img src="./images/apple-logo.png" alt="" />
            <p>Apple</p>
          </div>
          <small>or</small>
          {/* <hr /> */}

          <div>
          <input type="text" placeholder="Username" />
          <input type="email"  placeholder="Email"/>
          <div className="password">
          <input type="password"  placeholder="password"/>
          <img src="./images/eye-logo.png" alt="" />
          </div>
          <div className="password">
          <input type="password"  placeholder="Retype password"/>
          <img src="./images/eye-logo.png" alt="" />
          </div>
          </div>
          <p>6 or more characters, one number, one uppercase and one lower case.</p>

          <button>Sing up with Email</button>
          <h3>Already have an account? <span>Log in</span></h3>
          <footer className="form-footer">
            <p>By signing in with an account, you agree to the Scissors <span>Terms of service, Privacy policy</span> and <span>Acceptable use policy</span></p>
          </footer>
        </form>
    </div>
  )
}

export default SignUp;