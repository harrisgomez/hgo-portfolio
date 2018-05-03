const Landing = () => {
    return (
        <div id='landing-component'>
            <div className="landing-overlay"></div>
            <div className="parallax" data-parallax="scroll" data-image-src="./src/assets/img/parallax1.jpg">
                <div className="content">
                    <div className="intro">
                        <h2 className='text'>Hi, I'm <span className="highlight">Harris</span> and I develop</h2>
                        <br />
                        <div className="words-wrapper"></div>
                    </div>
                    <div className="page-scroll">
                        <a href="">Learn more about me<br /><span className="arrow down"></span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
