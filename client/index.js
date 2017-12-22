require('./index.scss');

import React, {Component} from 'react';
import ReactDom from 'react-dom';


class Test extends Component {
    constructor (){
        super();
    }

    render (){
        return (
            <div className="content">Hello, react.</div>
        )
    }
}

ReactDom.render( <Test />, 
    document.querySelector('#wrapper')
);