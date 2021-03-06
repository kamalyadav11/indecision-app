class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
        options: props.options
      };
    }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if(options) {
        this.setState(() => ({options}))
      }  
  } catch (error) {
      //DO Nothing
      } 
  }
  componentDidUpdate(prevState, prevProps) {
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  handleDeleteOptions() { 
    this.setState(() => ({options: [] }));
    }
  handleDeleteOption(option) {
    this.setState((prevState) => ({
      options:prevState.options.filter((optionNew) => {
        return option !== optionNew;
      })
   }));
  }
  handlePick() {
    let randNum = Math.floor(Math.random() * this.state.options.length);
    let randOption = this.state.options[randNum];
    alert(randOption);
  }
  handleAddOption(option) {
    if (!option) {
      return "Please Enter a valid String";
    } else if (this.state.options.indexOf(option) > -1) {
        return "Task already Exists";
    }
    this.setState((prevSate) => 
      ({options: prevSate.options.concat(option)}))
    }
  render() {
    const title = "Indecision App";
    const subtitle = "The coolest to do app";

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
          />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options:[]
}

const Header = (props) => {
  return (
    <div> 
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
}

Header.defaultProps = {
  title: "Indecision"
}

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do</button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
        {props.options.length === 0 && <p>Please Add Something to get Started</p>}
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {
          props.options.map((option) => (
            <Option
             key={option}
             optionText={option}
             handleDeleteOption={props.handleDeleteOption}
             />
            ))
        }
    </div>
    );
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
      >
      Remove</button>  
    </div>
  );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
        error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({error}));
    if(!error) {
      e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input id="inp" type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div> 
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
