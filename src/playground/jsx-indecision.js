console.log("App is Running");

//JSX - javaScript XML
const game = {
  title: "Indecision App",
  subtitle: "The best to do list",
  options: []
};

const onFormSubmit = event => {
  event.preventDefault();/*The event.preventDefault() method stops the default action of an element from happening. For example: Prevent a submit button from submitting a form
  Prevent a link from following the URL*///here it is stopping the page from refrshing and submitting the form
  let option = event.target.elements.option.value;
  if (option) {
    game.options.push(option);
    //event.target.elements.option.value = "";
    event.target.elements.option.value = " ";
  }
  renderArray();
}

const onClicking = () => {
    //game.options.length = 0;//or 
   // preventDefault();
    game.options = [];
    renderArray();
}

const onMakeDecision = () =>{
  const randomNum = Math.floor(Math.random() * game.options.length);
  const option = game.options[randomNum];
  alert(option);
  //return option;
}

const renderArray = () => {
const template = (
  <div>
    <h1> { game.title }</h1> 
    { game.subtitle  && <p>{ game.subtitle }</p> }
    { game.options.length > 0 ? <p>Here are your Options: { game.options }</p> : <p> No options to show </p> }
    <button disabled={game.options.length === 0} onClick={onMakeDecision}>What should I do</button>
    <button onClick={onClicking}>Remove All </button>
   
    <ol>
      {
      game.options.map((option, index) => {
        return <li key={option}>{option}</li>;
      })
      }
    </ol>

    <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add Option</button>
    </form>
  </div>
);
ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById("app");
renderArray();


