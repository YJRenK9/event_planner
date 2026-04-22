import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer'; // Import Footer component

const EventPlanner = () => {
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
                    <Row className='justify-content-center g-4'>
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
                    <div className='testimonial'>
                        <p>"This app has made event planning so much easier! Highly recommended!"</p>
                        <p className='author'>- Vivian Lou</p>
                    </div>
                    <div className='testimonial'>
                        <p>"I love how intuitive and user-friendly this app is. It has saved me so much time!"</p>
                        <p className='author'>- Josh Dewey</p>
                    </div>
                    <div className='testimonial'>
                        <p>"The event management features are outstanding. Event Planner became an essential tool for my planning!"</p>
                        <p className='author'>- Alex Randall</p>
                    </div>
                </section>
                {/* Section to provide contact information */}
                <section className='contact'>
                    <h2>Contact Us</h2>
                    <form>
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <textarea placeholder="Your Message"></textarea>
                        <button type="submit" className='submit-button'>Send Message</button>
                    </form>
                </section>
            </div>
            <Footer /> {/* Include Footer component at the bottom of the page */}
        </>
    );
};

export default EventPlanner;
