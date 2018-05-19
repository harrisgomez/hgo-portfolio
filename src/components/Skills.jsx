import Header from 'Header';

export default class Skills extends React.Component {
    render() {
        return (
            <div id='skills-wrapper'>
                <div className='container flex col'>
                    <Header title='Skills' />
                    <div className='content flex col'>
                        <div className='skill-html'>HTML</div>
                        <div className='skill-css'>CSS</div>
                        <div className='skill-js'>JavaScript</div>
                        <div className='skill-webpack'>Webpack</div>
                        <div className='skill-ui'>UI Design</div>
                        <div className='skill-responsive'>Responsive Design</div>
                    </div>
                </div>
            </div>
        );
    }
}
