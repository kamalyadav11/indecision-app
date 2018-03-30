import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
      options: [],
      selectedOptions: undefined
    };
    closeModal = () => {
      this.setState(() => ({
        selectedOptions: undefined
      }))
    }
    handleDeleteOptions = () => { 
      this.setState(() => ({options: [] }));
      };
    handleDeleteOption = (option) => {
      this.setState((prevState) => ({
        options: prevState.options.filter((optionNew) => {
          return option !== optionNew;
        })
     }));
    };
    handlePick = () => {
      let randNum = Math.floor(Math.random() * this.state.options.length);
      let randOption = this.state.options[randNum];
      //alert(randOption);
      this.setState(() => ({
        selectedOptions: randOption
      }));
    };
    handleAddOption = (option) => {
      if (!option) {
        return "Please Enter a valid String";
      } else if (this.state.options.indexOf(option) > -1) {
          return "Task already Exists";
      }
      this.setState((prevSate) => 
        ({options: prevSate.options.concat(option)}))
    };
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
        if(prevState.options !== this.state.options.length){
          const json = JSON.stringify(this.state.options);
          localStorage.setItem("options", json);
      }
    } 
    render() {
      const title = "Indecision App";
      const subtitle = "Put your Decisions in the Hands of a Computer";
  
      return (
        <div>
          <Header title={title} subtitle={subtitle}/>
          <div className="container">
            <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
            <div className="widget">
              <Options
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
              <AddOption handleAddOption={this.handleAddOption}/>
            </div>
          </div>
          <OptionModal 
            selectedOptions={this.state.selectedOptions}
            closeModal={this.closeModal}
          />
        </div>
      );
    }
}
  

 