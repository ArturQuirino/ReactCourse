console.log('App.js is running!')

class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.onToggle = this.onToggle.bind(this);
        this.state = {
            toggle: false
        }
    }

    onToggle(){
        this.setState((prevState) => {
                return {
                    toggle: !prevState.toggle
                };
            }
        );
    }

    render() {
        return (
            <div>
                <h1>Visibility App</h1>
                <button onClick={this.onToggle}>{this.state.toggle ? 'Hide details' : 'Show details'}</button>
                {this.state.toggle && <p>Here are some details!</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));