const About = () => {
    return (
        <div id='about-component'>
            <button type="button" className="btn btn-secondary">Secondary</button>
            <div className="header">
                <h1>ABOUT</h1>
                <div className="">-</div>
            </div>
            <div className="skills">
                <div className="hexagon">
                    <div className="hexagon-inside">
                        <div className="hexagon-me"></div>
                    </div>
                </div>
                <div className='skill-levels'>
                    <ul>
                        <li id='skill-1'>CSS</li>
                        <li id='skill-2'>HTML</li>
                        <li id='skill-3'>JavaScript</li>
                        <li id='skill-4'>Webpack</li>
                        <li id='skill-5'>UI Design</li>
                        <li id='skill-6'>Responsive Design</li>
                    </ul>
                </div>
            </div>
            <div className="row">

            </div>
        </div>
    );
};

export default About;
