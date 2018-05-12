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
    render () {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}


class Options extends React.Component {
    render () {
        return (
            <div>
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
    render (){
        return (
            <div>
                <form>
                    <input />
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