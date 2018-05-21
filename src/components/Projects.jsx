import Header from 'Header';

export default class Projects extends React.Component {
    render() {
        return (
            <div id='projects-wrapper'>
                <div className='container flex col'>
                    <Header title='Projects' />
                    <div className='content'>
                        <div className='projects'>
                            <div>Project 1</div>
                            <div>Project 2</div>
                            <div>Project 3</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
