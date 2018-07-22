export default class Landing extends React.Component {
    render() {
        return (
            <div id='landing-wrapper'>
                <div className='container flex col'>
                    <div className="landing-overlay"></div>
                    <div className="colored-overlay"></div>
                    <div className="intro-wrapper flex col">
                        <div className='logo flex col' style={{border:'4px solid red'}}>logo</div>
                        <div className='intro flex col'>
                            <div className='text flex col'>
                                <h2>Hi, I'm <span className="highlight">Harris</span> and I develop</h2>
                                <h2 className='words-wrapper'></h2>
                            </div>
                        </div>
                        <div className='page-scroll flex'>
                            <p>Learn more about me</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
