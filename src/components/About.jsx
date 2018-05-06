const About = () => {
    return (
        <div id='about-component'>
            <div className="header">
                <h1 className="header">ABOUT</h1>
            </div>
            <div className='table'>
                <div className="skills table-row">
                    <div className='profile table-cell'>
                        <div className="hexagon">
                            <div className="hexagon-inside">
                                <div className="hexagon-me"></div>
                            </div>
                        </div>
                    </div>
                    <div className='skill-levels table-cell'>
                        <div className='table'>
                            <div className='table-row'>
                                <div className='skill-html table-cell bar'>HTML</div>
                            </div>
                            <div className='table-row'>
                                <div className='skill-css table-cell bar'>CSS</div>
                            </div>
                            <div className='table-row'>
                                <div className='skill-js table-cell bar'>JavaScript</div>
                            </div>
                            <div className='table-row'>
                                <div className='skill-webpack table-cell bar'>Webpack</div>
                            </div>
                            <div className='table-row'>
                                <div className='skill-ui table-cell bar'>UI Design</div>
                            </div>
                            <div className='table-row'>
                                <div className='skill-responsive table-cell bar'>Responsive Design</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
