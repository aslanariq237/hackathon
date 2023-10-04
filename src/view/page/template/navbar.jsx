import React from "react";

const Navbar = () => {
  // let nav = useNavigate;
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  return (
    <React.Fragment>
      <div className="nav mx-5">
        <div className="flex justify-between mx-5 mt-2 items-center">
          <div className="flex space-x-14">
              <h3 className="font-semibold">ResumeParser</h3>
            {/* <ul className="flex space-x-14 items-center">
              <Link to={'/home'}>
                <li className=""><a href="/" className=""><h1 className="text-xl font-semibold">M3</h1></a></li>
              </Link>
              <Link to={'/home'}>
                <li className=""><a href="/" className="">Home</a></li>
              </Link>
              <Link to={'/event'}>
                <li className=""><a href="/">Event</a></li>
              </Link >
              <Link to={'/'}>
                <li className=""><a href="/">Contact</a></li>
              </Link>
            </ul> */}
          </div>
          <div className=" flex col space-x-5">
            <p>{date}{time}</p>
          </div>
          {/* <div className="login">
            {
              localStorage.getItem('user_access_token')
                ?
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <p>{localStorage.getItem('email')}</p>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="bg-bg4">
                      <Dropdown.Item href="/admin-dashboard">
                        <p>Settings</p>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <form onSubmit={logout}>
                          <button>
                            <p>Logout</p>
                          </button>
                        </form>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                :
                <div className="button space-x-3">
                  <Link to={'/login'}>
                    <button className="px-2 py-{2px} hover:bg-slate-200 hover:border-none rounded-md">Login</button>
                  </Link>
                </div>
            }
          </div> */}
          {/* <div className="bg-card-bg rounded-full h-9 w-9"></div> */}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar