import React from 'react';
import './Right.css';

const RightComp = () => {
    return (
        <div className="Right">
            <p>Setup your NPM Account at <a href="https://docs.npmjs.com/creating-a-new-npm-user-account">https://docs.npmjs.com/creating-a-new-npm-user-account</a></p>
            <p>Install node from <a href="https://nodejs.org/en/download/">https://nodejs.org/en/download/</a> - this will install NPM as well</p>
            <p>Upgrade npm by running <code>npm install -g npm</code></p>
            <p>Install Bootstrap: <code>npm install bootstrap</code></p>
            <p>Install React Dom: <code>npm install next react react-dom</code></p>
            <p>Install React Bootstrap: <code>npm install react-bootstrap bootstrap</code></p>
            <p>Install Node Express: <code>npm install express</code></p>
            <p>Install Redux: <code>npm install redux react-redux redux-thunk</code></p>
            <p>Create React App: <a href="https://create-react-app.dev/docs/getting-started/">https://create-react-app.dev/docs/getting-started/</a></p>
            <p>React Routing DOM: <a href="https://www.npmjs.com/package/react-router-dom">https://www.npmjs.com/package/react-router-dom</a></p>
            <p>React Concepts: <a href="https://react.dev/reference/react">https://react.dev/reference/react</a></p>
            <p>React Bootstrap: <a href="https://react-bootstrap.github.io/">https://react-bootstrap.github.io/</a></p>
            <p>Step 1: After installing all prerequisites</p>
            <pre>npx create-react-app my-firstreact-project</pre>
            <pre>cd my-firstreact-project</pre>
            <p>Step 2: Start to Create Components (.js files) add them to the component folder</p>
            <p>Example components in this project: About, Footer, Header, Left, Middle, Right, Users</p>
            <p>Step 3: create a  Nods js Express API : <br>mkdir simple-node-api</br>
                                                       <br>cd simple-node-api</br>
                                                       <br>npm init -y</br>
            </p>
            <p>npm install express</p>
            <p>Step 4: Run the server : node server.js</p>
            <p> http://localhost:port/api/users</p>
            <p> To use this API npm install axios </p>
            <p></p>
        </div>
    );
};

export default RightComp;
