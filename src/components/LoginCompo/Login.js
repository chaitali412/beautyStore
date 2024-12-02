import './Login.css';

const Login =()=>{

    return(
        <div className='login-container'>
            <div className='card col-12 col-md-8 col-lg-3 col-mb-4'>
                <form>
            <img src="https://i.ibb.co/yVGxFPR/2.png" className='rounded-circle profImg mt-3'/>
                <h2 className='mt-2'>Sign In here</h2>
                <div className="mb-3 mt-5">
            <input
              type="username"
              className="form-control"
              id="username"
              placeholder="Username"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-4">
           <button type="button" class="btn btn-primary">Login</button>
          </div>
          <div className="mb-2">
            Forget Password
          </div>
          <div className="mt-2 mb-3">
          <a>Sign Up</a></div>
                </form>
            </div>
          
            <h4></h4>
        </div>
    )
}

export default Login;