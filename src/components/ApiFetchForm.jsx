import axios from 'axios';
import React, {useState, useEffect} from 'react';
import ModalFails from './ModalFails';
import ModalLogin from './ModalLogin';
// import ModalFails from './ModalFails';
// import ModalLogin from './ModalLogin';


export default function ApiFetchForm() {
    const [email, setEmail] = useState('');
    const [apiEmail, setApiEmail] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {

        const URL = 'https://jsonplaceholder.typicode.com/users'

        axios.get(URL).then(response=>{
            console.log(response.data);
            if(response.data){

                const urlEmail = response.data.map(apiemail =>apiemail.email)
                setApiEmail(urlEmail)
            }
        }).catch(error=>{console.log(error);})

        
    }, []);
    

    //    console.log(apiEmail);
    //    console.log(email);

    



    const handleClick = () => {
        for(let i = 0; i <= apiEmail.length; i++) {
              if(apiEmail[i] === email) {
                setModal(true)
            }
        }
        
        if(modal) {
            <ModalLogin />
        } else <ModalFails />
        
    }
    
    console.log(modal);

    

    return (
        <div>

       




            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div
                                className="card bg-dark text-white"
                                style={{ borderRadius: "1rem" }}
                            >
                                <form onSubmit={(event)=>{event.preventDefault()}} className="card-body p-5 text-center">
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
                                                onChange={(event)=>{setEmail(event.target.value)}}
                                                value={email}
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
                                            onClick={handleClick}
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
