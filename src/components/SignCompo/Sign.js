import './Sign.css';

const Sign =()=>{

    return(
        <div className='sign-container'>
            <div className='card col-12 col-md-8 col-lg-3 col-mb-4'>
                <form>
            <img src="https://i.ibb.co/yVGxFPR/2.png" className='rounded-circle profImg mt-1'/>
                <h2 className='mt-2'>Sign Up here</h2>
                <div className="mb-3 mt-3">
            <input
              type="username"
              className="form-control"
              id="username"
              placeholder="Enter Username"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-3">
            <input
              type="name"
              className="form-control"
              id="name"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="age"
              className="form-control"
              id="age"
              placeholder="Enter Age"
            />
          </div>
          <div className="mb-3">
            <input
              type="location"
              className="form-control"
              id="location"
              placeholder="Enter Location"
            />
          </div>
          <div className="mb-5">
            <textArea
              type="about"
              className="form-control"
              id="about"
              placeholder="write about you"
            />
          </div>
          <div className="mb-4">
           <button type="button" class="btn btn-primary">Sign Up</button>
          </div>
                </form>
            </div>
        </div>
    )
}

export default Sign;