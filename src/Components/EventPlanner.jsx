import { useState } from 'react';
import { Container, Row, Col, Toast, ToastContainer, Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer'; // Import Footer component
import Popup from './Popup'; // Import Popup component

const EventPlanner = () => {
    // state variable for the Toast ("confirmation" message)
    const [isShown, setIsShown] = useState(false);
    // state variable for the Modal ("error" message)
    const [isError, setIsError] = useState(false);

    function handleSubmit(event) {
        // prevents the webpage from refreshing to ensure the popup messages get displayed 
        event.preventDefault();

        // get form input
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var message = document.getElementById("message");

        // display toast if all fields are filled out, otherwise display modal
        if (name.value !== '' && email.value !== '' && message.value !== '') {
            setIsShown(true);
        } else {
            setIsError(true);
            return; // exit this function, form fields are not cleared by intentional design
        }
        
        // clear fields after sending message
        name.value = '';
        email.value = '';
        message.value = '';

        
        console.log("clicked");
    }

    return (
        <> {/* Main container for the Event Planner page */}
            <div className="event-planner-container">
                {/* Event Planner Header */}
                <header>
                    <h1>Welcome to Event Planner</h1>
                </header>
                {/* Section for describing the purpose of the app */}
                <section className='description'>
                    {/* Brief introduction or marketing message */}
                    <p>
                        Plan and organize your events effortlessly with Event Planner. From
                        birthdays to corporate meetings, we've got you covered.
                    </p>
                    {/* Call to action button */}
                    <button className='get-started-button'>Get Started</button>
                </section>
                {/* Section to list or categorize different types of events */}
                <Container className='event-categories'>
                    {/* Row for event categories with centering and spacing */}
                    <Row className='justify-content-center g-5 align-items-md-stretch'> {/* md means only happens on medium display */}
                         {/* if mobile view, each column will take up the full width */}
                         {/* if desktop view, columns will be side by side (12 / 4 = 3 columns) */}
                        <Col xs={12} md={4}> 
                            {/* Social event types */}
                            <ul>
                                <h2>Social Events:</h2>
                                <li>Birthday parties</li>
                                <li>Anniversary celebrations</li>
                                <li>Wedding receptions</li>
                                <li>Baby showers</li>
                                <li>Graduation parties</li>
                                <li>Family reunions</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={4}>
                            {/* Entertainment-based event types */}
                            <ul>
                                <h2>Entertainment Events:</h2>
                                <li>Concerts</li>
                                <li>Music festivals</li>
                                <li>Film screenings</li>
                                <li>Comedy shows</li>
                                <li>Art exhibitions</li>
                                <li>Cultural events</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={4}>
                            {/* Community-focused event types */}
                            <ul>
                                <h2>Community Events:</h2>
                                <li>Fundraising events</li>
                                <li>Charity galas</li>
                                <li>Volunteer drives</li>
                                <li>Neighborhood block parties</li>
                                <li>Community festivals</li>
                                <li>Cultural celebrations</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                {/* Section to highlight app features */}
                <section className='features'>
                    {/* Section Heading */}
                    <h2>App Features</h2>
                    {/* List of features */}
                    <ul>
                        <li>Easy Event Creation</li>
                        <li>Invite Management</li>
                        <li>Task Assignment</li>
                        <li>Progress Tracking</li>
                        <li>Real-time Collaboration</li>
                        <li>Customizable Templates</li>
                    </ul>
                </section>
                {/* Section for testimonials */}
                <section className='testimonials'>
                    <h2>What Our Users Say</h2>
                    <Container fluid className='px-0'> {/* Fluid container to allow full-width content */}
                         {/* Row for testimonials with spacing and alignment */}
                         {/* Each testimonial is in a column that takes full width on mobile and one-third on desktop */}
                         {/* Testimonials are styled with a custom class for consistent appearance */}
                        <Row className='justify-content-between gx-5'>
                            <Col xs={12} md={4} className='d-flex'>
                                <div className='testimonial'>
                                    <p>"This app has made event planning so much easier! Highly recommended!"</p>
                                    <p className='author'>- Vivian Lou</p>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className='d-flex'>
                                <div className='testimonial'>
                                    <p>"I love how intuitive and user-friendly this app is. It has saved me so much time!"</p>
                                    <p className='author'>- Josh Dewey</p>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className='d-flex'>
                                <div className='testimonial'>
                                    <p>"The event management features are outstanding. Event Planner became an essential tool for my planning!"</p>
                                    <p className='author'>- Alex Randall</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* Section to provide contact information */}
                <section className='contact'>
                    <h2>Contact Us</h2>
                    <form>
                        <input type="text" id="name" placeholder="Your Name" />
                        <input type="email" id="email" placeholder="Your Email" />
                        <textarea id="message" placeholder="Your Message"></textarea>
                        <button type="submit" className='submit-button' onClick={handleSubmit}>
                            Send Message
                        </button>
                    </form>
                </section>
            </div>
            {/* Include Footer component at the bottom of the page */}
            <Footer /> 
            {/* toast-fixed means the toast is positioned wherever the user is scrolling */}
            <ToastContainer position="top-center" className='p-3 toast-fixed'>
                <Toast onClose={() => setIsShown(false)} show={isShown} delay={3000} autohide>
                    <Toast.Body>
                        Thank you for reaching out to us!
                    </Toast.Body>
                    
                </Toast>
            </ToastContainer>
            <Modal show={isError} centered >
                <Modal.Body className='error-message'>
                    You cannot leave any fields blank! 
                    Please enter all fields before sending a message!
                </Modal.Body>
                <Modal.Footer className='error-message-bottom'>
                    <Button onClick={() => setIsError(false)} className='error-button'>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default EventPlanner;
