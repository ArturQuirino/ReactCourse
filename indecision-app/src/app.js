console.log('App.js is running!')


const appHeader = {
    title: "Meu título",
    subtitle: "meu subtítulo",
    options:[
        'one',
        'two'
    ]
};

const template = (
    <div>
        <h1>{appHeader.title}</h1>
        {appHeader.subtitle && <p>{appHeader.subtitle}</p>}
        {appHeader.options.length > 0 ? <p>Here are your options</p> : <p>No options</p> }
        <ol>
            <li>{appHeader.options[0]}</li>
            <li>{appHeader.options[1]}</li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {
    console.log("addOne")
};

const minusOne = () => {
    console.log("minusOne")
};

const reset = () => {
    console.log("reset")
};

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
);


const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);