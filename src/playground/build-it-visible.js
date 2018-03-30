

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggler = this.toggler.bind(this);
        this.state = {
            visibility: true
        }
    }
    toggler() {
        this.setState((prevState) => {
            return {
                visibility: !(prevState.visibility)
            }
        });
    }
    render() {
        //const title = "Visibilty Toggler"; 
        return (
            <div>
                <h1>Visibilty Toggler</h1>
                <button onClick={this.toggler}>{this.state.visibility ? "Show Details" : "Hide Details"}</button>
                {!this.state.visibility && <p>This was meant to be showed</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById("app"));






// const appRoot = document.getElementById("app");

// let visibility = true ;

// const toggler = () => {
    
//     visibility = !visibility;
//     render();
    
// }

// const render = () => {
//     const template = (

//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggler}>{ visibility ? "Show Details" : "Hide Details"}</button>
//             {!visibility && <p>This is meant to be showed</p>}
//         </div>
    
//     );
//     ReactDOM.render(template, appRoot);
// }

// render();

