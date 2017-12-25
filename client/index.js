require('./index.scss');

import React, {Component} from 'react';
import ReactDom from 'react-dom';


class Test extends React.Component {
    constructor (){
        super();
    }

    render (){
        return (
            <div className="content">
                <p>Hello, react.</p>
            </div>
        );        
    }
}

ReactDom.render( <Test />, 
    document.querySelector('#wrapper')
);