import React from 'react';

export default function Success(props) {
  return (
    <div>
      <section className="vh-100 gradient-custom" id='main'>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div
                                    className="card bg-dark text-white"
                                    style={{ borderRadius: "1rem" }}
                                >
                                    <form  className="card-body px-5 text-center">
                                        <div className="mb-md-5 mt-md-4 pb-5">
                                            <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                            <p className="text-white-50 mb-5">
                                                Please enter your login and password!
                                            </p>
                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    type="email"
                                                    id="typeEmailX"
                                                    className="form-control form-control-lg"
                                                    onChange={(event)=>{props.setEmail(event.target.value)}}
                                                    value={props.email}
                                                />
                                                <label className="form-label" htmlFor="typeEmailX">
                                                    Email
                                                </label>
                                            </div>
                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    type="password"
                                                    id="typePasswordX"
                                                    className="form-control form-control-lg"
                                                />
                                                <label className="form-label" htmlFor="typePasswordX">
                                                    Password
                                                </label>
                                            </div>
                                            <p className="small mb-5 pb-lg-2">
                                                <a className="text-white-50" href="#!">
                                                    Forgot password?
                                                </a>
                                            </p>
                                            <button
                                                className="btn btn-outline-light btn-lg px-5"
                                                type="submit"
                                                onClick={props.onLogin}
                                            >
                                                Login
                                            </button>

                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </div>
  );
}
