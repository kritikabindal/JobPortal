import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';




const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState(" ");

    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = {
            email: email,
            password: password}
            setAllEntry([...allEntry,newEntry]);

        
    }

    return (


        <div className="Login">
            <Form action=" " onSubmit={submitForm} >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="text" id="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>

            </Form>

            <div>
                {
                    allEntry.map((curElem) => {
                        return (
                            <div className="showDataStyles">
                                <p>
                                    {curElem.email}
                                    {curElem.password}

                                </p>

                            </div>
                        )
                    })
                }



            </div>






        </div>

    )
}

export default Login
