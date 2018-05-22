import Header from 'Header';

export default class Projects extends React.Component {
    render() {
        return (
            <div id='projects-wrapper'>
                <div className='container flex col'>
                    <Header title='Projects' />
                    <div className='projects content flex'>
                        <div className='project'>Project</div>
                        <div className='project'>Project</div>
                        <div className='project'>Project</div>
                        <div className='project'>Project</div>
                    </div>
                </div>
            </div>
        );
    }
}
