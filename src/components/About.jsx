{/*import Resume from 'Resume';*/}
import Header from 'Header';

export default class About extends React.Component {
    render() {
        return (
            <div id='about-wrapper'>
                <div className='container flex col'>
                    <Header title='About'/>
                    <div className='content flex col'>
                        <div className='hexagon'>
                            <div className='hexagon-inside'>
                                <div className='hexagon-me'></div>
                            </div>
                        </div>
                        <div className='text'>Short Description</div>
                        <div>
                            I'm a self-taught Front-End Developer based in Leesburg, VA.<br />
                            My previous projects included UI/UX development for MicroHealth, LLC and the Department of Defense.<br />
                            Since then, my passion for UI effects has grown as I continue to learn more ways to create intuitive and dynamic user experiences.<br />
                            This portfolio is an ongoing project of mine that I'll regularly update with more cool things to share with you all.
                        </div>
                    </div>
                </div>
                {/*<div className='modal'>
                    <div id='resume' className='modal-inner'></div>
                    <Resume />
                </div>*/}
            </div>
        );
    }
}
