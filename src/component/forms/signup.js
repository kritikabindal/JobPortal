import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';

const Signup = () => {



    const [userRegistration, setuserRegistration] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [record, setRecords] = useState([]);
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setuserRegistration({ ...userRegistration, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventdefault();
        return (
            <Container>
                <Form>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control autoComplete="off" value={userRegistration.username} onChange={handleInput} name="username" type="username" placeholder="User Name" />

                    </Form.Group>


                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control autoComplete="off" value={userRegistration.username} onChange={handleInput} name="username" type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control autoComplete="off" value={userRegistration.username} onChange={handleInput} name="username" type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
            </Container>
        )
    }

    export default Signup
