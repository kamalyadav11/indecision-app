/*
const personInfo = {
   name: "Kamal",
   age: 21,
   city: "Paris",
   getName: name => name ? name :"Anonymous"
};

let getLocation = city => {
  if(city) {
    return <p>City: { city }</p>
  }
}
//Another way is => user.name ? user.name ? "Anonymous" directly into h1 {} h1
const templatetwo = (
  <div>
    <h1>{ personInfo.getName(personInfo.name) }</h1> 
    { (personInfo.age && personInfo.age >=18) && <p>Age: { personInfo.age }</p> }
    { getLocation(personInfo.city) }
  </div>
);
//true && display => it's gonna display, //false && display => doesn't going to display anything*/


class IndecisionApp extends React.Component {
  constructor(props) {
    super(props); 
    this.removeAll = this.removeAll.bind(this);
    this.handleTask = this.handleTask.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }
  removeAll() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handleTask() {
    let option = Math.floor(Math.random() * this.state.options.length);
    let randNum = this.state.options[option];
    alert(randNum);
  }
  handleAddOption(option) {
    if(!option) {
      return "Enter a valid Task"
    } else if(this.state.options.indexOf(option) > -1) {
      return "Task already exists"
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
        }
    });
  }
  render() {
    const title = "Indecision App";
    const subtitle = "The best to do App";
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action handleTask={this.handleTask} hasOptions={this.state.options.length > 0}/>
        <Options options={this.state.options} removeAll={this.removeAll} hasRemove={this.state.options.length > 0}/>
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <h4>{props.subtitle}</h4>
      </div>
  );
}

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handleTask} disabled={!props.hasOptions}>What should I do</button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.removeAll} disabled= {!props.hasRemove}>Remove All</button>
      {
        props.options.map(option => <Option key={option} optionText={option} />)
      }
    
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      <ol>
        {props.optionText}
      </ol> 
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
    const errorOrValue =  this.props.handleAddOption(option); 
    this.setState(() => {
      return {
        errorOrValue
      }
    });
  }
  render() {
    return (
      <div> 
      {this.state.errorOrValue && <p>{this.state.errorOrValue}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById("app"));
























