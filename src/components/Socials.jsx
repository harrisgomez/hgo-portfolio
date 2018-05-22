import Header from 'Header';
import GitHubLogo from 'github-logo';
import CodePenLogo from 'codepen-logo';
import LinkedInLogo from 'linkedin-logo';

export default class Socials extends React.Component {
    render() {
        return (
            <div id='socials-wrapper'>
                <div className='container flex col'>
                    <Header title='Socials' />
                    <div className='socials content flex'>
                        <div className='project'><img src={GitHubLogo} alt='GitHub Logo' /></div>
                        <div className='project'><img src={CodePenLogo} alt='CodePen Logo' /></div>
                        <div className='project'><img src={LinkedInLogo} alt='LinkedIn Logo' /></div>
                    </div>
                </div>
            </div>
        );
    }
}
