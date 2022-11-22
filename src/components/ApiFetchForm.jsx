import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Failed from './Failed';
import Success from './Success';
// import ModalFails from './ModalFails';
// import ModalLogin from './ModalLogin';


export default function ApiFetchForm() {

    const [email, setEmail] = useState('');
    const [apiEmail, setApiEmail] = useState([]);
    const [modal, setModal] = useState(false);


    useEffect(() => {

        const URL = 'https://jsonplaceholder.typicode.com/users'

        axios.get(URL).then(response => {
            if (response.data) {
                const urlEmail = response.data.map(apiemail => apiemail.email)
                setApiEmail(urlEmail)
            }
        }).catch(error => { console.log(error); })


    }, []);

    //    console.log(apiEmail);
    //    console.log(email);

    const onLogin = (e) => {

        e.preventDefault()

        setModal(false)

        apiEmail.forEach(item => {
            console.log(item);
            if (item === email) {
                setModal(true)
            }
        })




        // for(let i = 0; i <= apiEmail.length; i++) {
        //         console.log(apiEmail[i]);
        //       if(email === apiEmail[i]) {
        //         setModal(true)
        //     }
        //     console.log(modal);

        // }       
    }



    return (
        <div>



            {
                modal !== true ?


                    <Success onLogin={onLogin} email={email} setEmail={setEmail} /> : <Failed />

            }


        </div>


    );
}
