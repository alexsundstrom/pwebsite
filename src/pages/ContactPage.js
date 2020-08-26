import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';
import styled from 'styled-components';


import AboutContent from '../components/Layout';

const SuccessMsg = styled.p`
    color: green;
    padding: 15px 10px;
`;
const ErrorMsg = styled.p`
    color: red;
    padding: 15px 10px;
`;


class ContactPage extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })

    }

    handleSubmit = (event) => {
        console.log(this.state)
        event.preventDefault();
        emailjs.sendForm("gmail", "template_H3kE46Ns", "#contactForm", "user_4jWQXwXmqidAbq0vTw2YC").then().catch(err => {
            this.state({
                disabled: false,
                emailSent: false
            })
        })
        
        this.setState({
            disabled: true,
            emailSent: true
        });
    }

    render() {

        return(

            <div style={{height: "77vh"}}>
                

            <AboutContent>
                <br />
                <h1 style={{paddingTop: "20px", paddingLeft: "40px"}}>Let´s Talk!</h1>
                <br />
                <br />
                <br />
                <br />
                <form id="contactForm" onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor="name">Full Name</Form.Label>
                        <Form.Control id="name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="message">Message</Form.Label>
                        <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange} />
                    </Form.Group>

                    <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                        Send
                    </Button>

                    {this.state.emailSent === true && <SuccessMsg className="d-inline success-msg">Email Sent</SuccessMsg>}
                    {this.state.emailSent === false && <ErrorMsg className="d-inline err-msg">Email Not Sent</ErrorMsg>}

                </form>
            </AboutContent>
            </div>
    );
    }
}

export default ContactPage;