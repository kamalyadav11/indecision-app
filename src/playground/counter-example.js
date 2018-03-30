/*Again make this with component*/

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
      const num = localStorage.getItem("num");
      const num1 = parseInt(num, 10);
      if(!isNaN(num1)) {
        this.setState(() => ({num1}));
      }
    }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count) {
      localStorage.setItem("num", this.state.count);
    }
  }
  addOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }
  minusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }
  reset() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Count: { this.state.count }</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));

// let count = 0;

// const obj = {
//   addOne() {
//     count++;
//     reactCounterApp();
//   },
//   minusOne() {
//     count--;
//     reactCounterApp();
//   },
//   reset() {
//     count = 0;
//     reactCounterApp();
//   }
// }
// /*
// const addOne = () => {
//   count++;
//   reactCounterApp();
// }

// const minusOne = () => {
//   count--;
//   reactCounterApp();
// }

// const reset = () => {
//   count = 0;
//   reactCounterApp();
// }
// */
// const reactCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: { count }</h1>
//       <button onClick={obj.addOne}>+1</button>
//       <button onClick={obj.minusOne}>-1</button>
//       <button onClick={obj.reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, document.getElementById("app"));
// }

// reactCounterApp();
