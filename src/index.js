import React from 'react';
import {render} from 'react-dom'
import './index.css';
import Root from './components/Root'
import WebFontLoader from 'webfontloader'

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

render(<Root />, document.getElementById('root'))
