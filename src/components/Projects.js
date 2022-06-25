import React from 'react';
import Collapsible from 'react-collapsible';
import { BsChevronDown } from 'react-icons/bs';
import Header from '../components/Header';

function Projects() {
    return (
        <div className="about-container">
            <Header />
            <Collapsible
                className="mb-4 about-collapse"
                trigger={['HTML', <BsChevronDown />]}
            >
                <p>This is the collapsible content. It can be any element or React component you like.</p>
                <p>It can even be another Collapsible component. Check out the next section!</p>
            </Collapsible>
            <Collapsible
                className="mb-4 about-collapse"
                trigger={['CSS', <BsChevronDown />]}
            >
                <p>This is the collapsible content. It can be any element or React component you like.</p>
                <p>It can even be another Collapsible component. Check out the next section!</p>
            </Collapsible>
            <Collapsible
                className="mb-4 about-collapse"
                trigger={['Bootstrap', <BsChevronDown />]}
            >
                <p>This is the collapsible content. It can be any element or React component you like.</p>
                <p>It can even be another Collapsible component. Check out the next section!</p>
            </Collapsible>
            <Collapsible
                className="mb-4 about-collapse"
                trigger={['JavaScript', <BsChevronDown />]}
            >
                <p>This is the collapsible content. It can be any element or React component you like.</p>
                <p>It can even be another Collapsible component. Check out the next section!</p>
            </Collapsible>

            <Collapsible
                className="mb-4 about-collapse"
                trigger={['Postman/API', <BsChevronDown />]}
            >
                <p>This is the collapsible content. It can be any element or React component you like.</p>
                <p>It can even be another Collapsible component. Check out the next section!</p>
            </Collapsible>
            <Collapsible
                className="mb-4 about-collapse"
                trigger={['React', <BsChevronDown />]}
            >
                <p>This is the collapsible content. It can be any element or React component you like.</p>
                <p>It can even be another Collapsible component. Check out the next section!</p>
            </Collapsible>
            <Collapsible
                className="mb-4 about-collapse"
                trigger={['Async/Await', <BsChevronDown />]}
            >
                <p>This is the collapsible content. It can be any element or React component you like.</p>
                <p>It can even be another Collapsible component. Check out the next section!</p>
            </Collapsible>
            <Collapsible
                className="mb-4 about-collapse"
                trigger={['What I have used in building this project', <BsChevronDown />]}
            >
                <p>This is the collapsible content. It can be any element or React component you like.</p>
                <p>It can even be another Collapsible component. Check out the next section!</p>
            </Collapsible>
        </div>
    );
}

export default Projects;
