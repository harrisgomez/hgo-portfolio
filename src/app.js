// entry point into our app

// assets & dependencies
// no need to import jquery. Defined in webpack.ProvidePlugin
import 'styles';
import 'index';

// no need to import ReactReactDOM. Defined in webpack.ProvidePlugin
import About from 'About';
import Landing from 'Landing';
import Skills from 'Skills';
import Projects from 'Projects';
import Socials from 'Socials';
import Contact from 'Contact';

const App = () => {
    return (
        <div id='components-wrapper'>
            <Landing />
            <About />
            <Skills />
            <Projects />
            <Socials />
            <Contact />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
