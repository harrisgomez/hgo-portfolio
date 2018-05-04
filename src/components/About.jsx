const About = () => {
    return (
        <div id='about-component'>
            <div className="header">
                <h1>ABOUT</h1>
                <div className="">-</div>
            </div>
            <div className="skills">
                <div className='profile'>
                    <div className="hexagon">
                        <div className="hexagon-inside">
                            <div className="hexagon-me"></div>
                        </div>
                    </div>
                </div>
                <div className='skill-levels'>
                    <div id='skill-1'>CSS</div>
                    <div id='skill-2'>HTML</div>
                    <div id='skill-3'>JavaScript</div>
                    <div id='skill-4'>Webpack</div>
                    <div id='skill-5'>UI Design</div>
                    <div id='skill-6'>Responsive Design</div>
                </div>
            </div>
            <div className="row">

            </div>
        </div>
    );
};

export default About;
