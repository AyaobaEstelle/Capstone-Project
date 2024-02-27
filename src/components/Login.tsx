import React from 'react'

const Login = () => {
  return (
    <div className='login'>
        <form action="">
          <h2>Log in with:</h2>
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
          <input type="email" placeholder="Email address or username" />
          <div className="password">
          <input type="password"  placeholder="password"/>
          <img src="./images/eye-logo.png" alt="" />
          </div>
          </div>
          <p>forget password?</p>

          <button>Log in</button>
          <h3>Don't have an account? <span>Sing up</span></h3>
          <footer className="form-footer">
            <p>By signing in with an account, you agree to the Scissors <span>Terms of service, Privacy policy</span> and <span>Acceptable use policy</span></p>
          </footer>
        </form>
    </div>
  )
}

export default Login;