class IndecisionApp extends React.Component {
    render () {

        const title = 'Indecision';
        const subtitle = 'May subtitle';
        const options = ['Thing one', 'Thing two', 'Thing four']

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick');
    }

    render () {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}


class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        alert('All removed');
    }
    render () {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map(option => {
                        return <Option key={option} description={option}/>
                    })
                }
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if(option){
            alert('Option submited: ' + option)
        }
    }
    render (){
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

class Option extends React.Component {
    render () {
        return (
            <div>
                <p>{this.props.description}</p>
            </div>
        );
    }
}




ReactDOM.render(<IndecisionApp />, document.getElementById('app'));