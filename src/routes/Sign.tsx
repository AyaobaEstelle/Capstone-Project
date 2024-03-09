const Login = () => {
  return (
    <div className="w-full min-h-screen login">
      <form action="#" method="POST" className="login-form">
        <h2 className="text-neutral-500">Sign up with:</h2>
        <div className="form-socials_container">
          <div className="form-google bg-neutral-primary-900">
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5556 9.7111C19.5556 9.07776 19.4444 8.33887 19.3333 7.8111H10V11.5055H15.3333C15.1111 12.6667 14.4444 13.6167 13.3333 14.3555V16.7833H16.6667C18.5556 15.0944 19.5556 12.5611 19.5556 9.7111Z"
                fill="#4285F4"
              />
              <path
                d="M10.0002 19C12.6669 19 15.0002 18.1556 16.6669 16.6778L13.3335 14.3556C12.4447 14.8834 11.3335 15.3056 10.0002 15.3056C7.44466 15.3056 5.22244 13.6167 4.44466 11.4H1.11133V13.7222C2.66688 16.8889 6.11133 19 10.0002 19Z"
                fill="#34A853"
              />
              <path
                d="M4.44444 11.2944C4.22222 10.7667 4.11111 10.1333 4.11111 9.49999C4.11111 8.86666 4.22222 8.23333 4.44444 7.70555V5.27777H1.11111C0.444444 6.54444 0 8.02222 0 9.49999C0 10.9778 0.333333 12.4555 1.11111 13.7222L4.44444 11.2944Z"
                fill="#FBBC05"
              />
              <path
                d="M10.0002 3.8C11.4447 3.8 12.778 4.32778 13.778 5.17222L16.6669 2.42778C15.0002 0.95 12.6669 0 10.0002 0C6.11133 0 2.66688 2.11111 1.11133 5.27778L4.44466 7.70556C5.22244 5.48889 7.44466 3.8 10.0002 3.8Z"
                fill="#EA4335"
              />
            </svg>

            <p className="text-neutral-100">Google</p>
          </div>
        <div className="form-apple  bg-neutral-primary-900">
          <img src="./images/apple-logo.png" alt="" />
          <p className=" text-neutral-100">Apple</p>
        </div>
        </div>
        <div className="or text-neutral-400">
        <hr />
        or
        <hr />
        </div>
        

        <div className="form-field">
        <input className="form-user" type="text" placeholder="Username" />
          <input className="form-email" type="email" placeholder="Username" />
          <div className="form-password">
            <input type="password" placeholder="password" />
            <svg
              width="23"
              height="15"
              viewBox="0 0 23 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4531 14.3765C4.74423 14.3765 0 8.89144 0 7.18827C0 5.47596 4.71798 0 11.4508 0C18.2292 0 22.8936 5.47596 22.8936 7.18827C22.8936 8.89144 18.2372 14.3765 11.4508 14.3765H11.4531ZM11.4531 11.8617C14.0478 11.8617 16.1334 9.72933 16.1334 7.18827C16.1353 6.57384 16.0155 5.96511 15.7808 5.39727C15.5461 4.82944 15.2012 4.31375 14.766 3.88002C14.3307 3.4463 13.8139 3.10314 13.2452 2.87037C12.6766 2.63761 12.0675 2.51987 11.4531 2.52394C8.83893 2.52394 6.7522 4.57529 6.76133 7.18827C6.77046 9.72933 8.83893 11.8617 11.4531 11.8617ZM11.4531 8.89144C10.9994 8.89147 10.5641 8.71269 10.2414 8.39386C9.91873 8.07503 9.73474 7.64186 9.72933 7.18827C9.72933 6.25221 10.5056 5.47596 11.4508 5.47596C12.3868 5.47596 13.1722 6.25221 13.1722 7.18827C13.1722 8.1152 12.3868 8.89144 11.4508 8.89144H11.4531Z"
                fill="#005AE2"
              />
            </svg>
          </div>
          <div className="form-password">
            <input type="password" placeholder="Retype Password" />
            <svg
              width="23"
              height="15"
              viewBox="0 0 23 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4531 14.3765C4.74423 14.3765 0 8.89144 0 7.18827C0 5.47596 4.71798 0 11.4508 0C18.2292 0 22.8936 5.47596 22.8936 7.18827C22.8936 8.89144 18.2372 14.3765 11.4508 14.3765H11.4531ZM11.4531 11.8617C14.0478 11.8617 16.1334 9.72933 16.1334 7.18827C16.1353 6.57384 16.0155 5.96511 15.7808 5.39727C15.5461 4.82944 15.2012 4.31375 14.766 3.88002C14.3307 3.4463 13.8139 3.10314 13.2452 2.87037C12.6766 2.63761 12.0675 2.51987 11.4531 2.52394C8.83893 2.52394 6.7522 4.57529 6.76133 7.18827C6.77046 9.72933 8.83893 11.8617 11.4531 11.8617ZM11.4531 8.89144C10.9994 8.89147 10.5641 8.71269 10.2414 8.39386C9.91873 8.07503 9.73474 7.64186 9.72933 7.18827C9.72933 6.25221 10.5056 5.47596 11.4508 5.47596C12.3868 5.47596 13.1722 6.25221 13.1722 7.18827C13.1722 8.1152 12.3868 8.89144 11.4508 8.89144H11.4531Z"
                fill="#005AE2"
              />
            </svg>
          </div>
        </div>
        <p className="character text-neutral-400">6 or more character, one number, one uppercase & one lower case.</p>
        <button className="bg-neutral-primary-900 text-neutral-100">Sign up with Email</button>
        <h3 className="text-neutral-500">
          Already have an account? <span className="text-neutral-primary-900">Log in</span>
        </h3>
        <footer className="form-footer text-neutral-400">
          <p>
            By signing up, you agree to <br />Scissors{" "}
            <span className="text-neutral-500">Terms of service, Privacy policy</span> and{" "}
            <span className="text-neutral-500">Acceptable use policy</span>
          </p>
        </footer>
      </form>
    </div>
  );
};

export default Login;
