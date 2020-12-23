import React from 'react';
import ReactDOM from 'react-dom';


// const name = "cristopher"
// const sum = () => 3 +3 ;
// const jsx = <h1>Hola soy, {sum()}</h1>

const jsx = 
    <div>
        <h1>Hola, soy Cristopher</h1>
        <p>Soy ingeniero (mentira) frontend.</p>
    </div>;

const element = React.createElement(
    'div', 
    {}, 
    React.createElement("h1", {}, "Hola, soy Cristopher!"),
    React.createElement("p", {}, "soy ingeniero (mentira) frontend")
)
const container = document.getElementById('app')

ReactDOM.render(jsx, container)