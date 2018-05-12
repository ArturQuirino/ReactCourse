console.log('App.js is running!')
const appRoot = document.getElementById("app");

let togle = false;

const onTogle = () => {
    togle = !togle;
    render();
};

const render = () => {
    const content = (
        <div>
            <h1>Visibility App</h1>
            <button onClick={onTogle}>{togle ? 'Hide details' : 'Show Details'}</button>
            {togle && <p>Here are some details</p>}
        </div>
    );
    
    ReactDOM.render(content, appRoot)
};

render();