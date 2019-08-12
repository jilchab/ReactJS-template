import React from 'react';

const hello = (name) => `Hello ${name}`;

const App = () => (
    <div className="App">
        <p>
            {
                hello('world!')
            }
        </p>
    </div>
);

export default App;
