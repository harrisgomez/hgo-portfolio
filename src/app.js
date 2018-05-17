// entry point into our app

// assets & dependencies
import 'styles';
import 'jquery';
import 'index';
// import 'parallax/parallax';

// Components
// no need to import React or ReactDOM. Defined in webpack.ProvidePlugin
// import Landing from 'Landing';
// import About from 'About';
// import Resume from 'Resume';
import About from 'About';
import Landing from 'Landing';

const App = () => {
    return (
        <div className='components-wrapper'>
            <Landing />
            <About />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Landing />, document.getElementById('landing-wrapper'));
// ReactDOM.render(<About />, document.getElementById('about-wrapper'));
// ReactDOM.render(<Resume />, document.getElementById('resume'));
