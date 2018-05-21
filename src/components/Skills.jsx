import Header from 'Header';

export default class Skills extends React.Component {
    render() {
        return (
            <div id='skills-wrapper'>
                <div className='container flex col'>
                    <Header title='Skills' />
                    <div className='content flex col'>
                        <div className='skill-html flex bar'>
                            <div className='tag flex'>HTML</div>
                            <span>90%</span>
                        </div>
                        <div className='skill-css flex bar'>
                            <div className='tag flex'>CSS</div>
                            <span>80%</span>
                        </div>
                        <div className='skill-js flex bar'>
                            <div className='tag flex'>JavaScript</div>
                            <span>70%</span>
                        </div>
                        <div className='skill-webpack flex bar'>
                            <div className='tag flex'>Webpack</div>
                            <span>60%</span>
                        </div>
                        <div className='skill-ui flex bar'>
                            <div className='tag flex'>UI Design</div>
                            <span>50%</span>
                        </div>
                        <div className='skill-responsive flex bar'>
                            <div className='tag flex'>Responsive Design</div>
                            <span>60%</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
