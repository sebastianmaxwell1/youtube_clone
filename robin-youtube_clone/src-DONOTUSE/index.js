import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();


// class App extends React.Component {
//     render() {
//         return(
//             <div>
//                 <h1>Hello!</h1>
//                 <p>needs style!.</p>
//             </div>
//         );
//     }
// }



// ReactDOM.render(<App />, document.getElementById('root'));

