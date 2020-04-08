import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import questions from "./questions.json";

const TIME_LIMIT = 5
const TITLE_STATE = 0
const QUESTION_STATE = 1

class QuizQuestion extends React.Component {
  render() {
      return <>
      <h1>{this.props.questions}</h1>
      {this.props.answers.map((v, i) =>
      <input className="answers" onClick={()=> this.props.nextQuestion()} type = "button" key={i} value = {v.text} />)}
      </>
  }
}

class TitlePage extends React.Component  {
  constructor(props) {
    super(props)
      this.state = {titleText: "Test Your Harry Potter Knowledge!",
      currentState: TITLE_STATE,
      counter: 0,
      currentQuestion: 0}
      this.counter = 0
      this.timeLimit = TIME_LIMIT
  }
  nextQuestion()  {
    clearInterval(this.timer)
    this.setState({
      titleText:"You answered early!",
      currentState: TITLE_STATE
    })
  }

  start() {
    console.log("starting")
    this.setState({counter:0})
    this.setState({currentState: QUESTION_STATE})

    this.timer = setInterval(() => {
      console.log("Interval Called")
      this.setState({counter : this.state.counter+1})
      if(this.state.counter < this.timeLimit) {
      this.setState({ titleText: "Begin the quiz! " + this.state.counter})
      } else {
        this.setState({titleText: "times up!"})
        clearInterval(this.timer)
      }
  }, 1000);
}

  render(props){
    console.log("RENDER CALLED")
    return (
      <div className='App'>
        <div>{this.timeLimit - this.state.counter}</div>
        {(this.state.currentState === QUESTION_STATE) ?
        <QuizQuestion answers={questions[this.state.currentQuestion].possibleAnswers}
          question={questions[this.state.currentQuestion].question}
          nextQuestion={() => this.nextQuestion()} />
          :
          <h1 className='title'>{this.state.titleText}</h1>}
          <input id='startButton' type="button" value="Start" onClick={() => this.start()}></input>  
        </div>
      )
    }
  }

class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <TitlePage/>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008080',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#FFFFFF',
    fontSize: 30
  }
});
