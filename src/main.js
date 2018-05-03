// entry point into our app

// assets & dependencies
import 'styles';
import 'jquery';
import 'index';
import 'parallax/parallax';

// components
// no need to import React or ReactDOM. Defined in webpack.ProvidePlugin
import Landing from 'Landing';
import About from 'About';

// ReactDOM.render(<Landing />, document.getElementById('landing-wrapper'));
ReactDOM.render(<About />, document.getElementById('about-wrapper'));
