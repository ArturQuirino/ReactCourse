console.log('App.js is running!')


const appHeader = {
    title: "Meu título",
    subtitle: "meu subtítulo",
    options:[]
};

const onFormSubmit = (e) =>{
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option){
        appHeader.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onRemoveAllOptions = () => {
    appHeader.options = [];
    render();
};

const appRoot = document.getElementById("app");

const render = () => {
    const template = (
        <div>
            <h1>{appHeader.title}</h1>
            {appHeader.subtitle && <p>{appHeader.subtitle}</p>}
            {appHeader.options.length > 0 ? <p>Here are your options</p> : <p>No options</p> }
            <p>{appHeader.options.length}</p>
            <button onClick={onRemoveAllOptions}>Remove All</button>
            <ol>
                {
                    appHeader.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );

    
    ReactDOM.render(template, appRoot);
}

render();

