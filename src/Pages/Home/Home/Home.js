import React from 'react';
import AppointmentHome from '../AppointmentHome/AppointmentHome';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Banner></Banner>
            <Services></Services>
            <Treatment></Treatment>
            <AppointmentHome></AppointmentHome>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;