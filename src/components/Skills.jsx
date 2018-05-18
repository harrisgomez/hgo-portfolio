import Header from 'Header';

export default class Skills extends React.Component {
    render() {
        return (
            <div id='skills-wrapper'>
                <div className='container flex col'>
                    <Header title='Skills' />
                    <div className='skills-wrapper flex col'>
                        <div className='skill-levels flex'>
                            <div className='skill-html flex col'>HTML</div>
                            <div className='skill-css flex col'>CSS</div>
                            <div className='skill-js flex col'>JavaScript</div>
                            <div className='skill-webpack flex col'>Webpack</div>
                            <div className='skill-ui flex col'>UI Design</div>
                            <div className='skill-responsive flex col'>Responsive Design</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
