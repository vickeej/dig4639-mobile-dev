import React from 'react';
import questions from "./questions.json";
import {StyleSheet, Button, TouchableOpacity, Text, View} from 'react-native';

const TIME_LIMIT = 5
const TITLE_STATE = 0
const QUESTION_STATE = 1
const FINAL_STATE = 2

class QuestionOnQuiz extends React.Component{

  render(){
    return<>
    <Text style = {styles.questionText}>{this.props.question}</Text>
    {this.props.answers.map((v,i) =>
    <Button color = "#e8b390" title = {v.text} onPress = {() => this.props.nextQuestion(v.correct)} key = {i}
    value = {v.text} />)}
    </>
  }
}

function StartButton(props)  {
  return <TouchableOpacity onPress={props.onPress}
    style={styles.start}>
    <View style={styles.buttonView}>
    <Text style={styles.buttonText}>{props.title}</Text>
    </View>
    </TouchableOpacity>
}

class TitlePage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      score : 0,
      titleText: "Begin the Quiz:",
      counter : 0,
      currentState: TITLE_STATE,
      currentQuestion: 0
    }
    this.timeLimit = TIME_LIMIT
  }

  nextQuestion(correct){
    if(correct){
      this.setState({score: this.state.score + 1})
    }
    if(this.state.currentQuestion == questions.length - 1) {
      this.setState({ currentState: FINAL_STATE  })
    }  else{
      clearInterval(this.timer)
      this.setState({
        currentState : QUESTION_STATE,
        currentQuestion : this.state.currentQuestion + 1
      })
    }
  }

  countdown() {
    console.log("Handling interval")
    console.log(this.state.counter)
    if(this.state.counter < this.timeLimit) {
      this.setState({
        titleText: 'Starting the Quiz...',
        counter: this.state.counter +1
      })
    } else {
        this.setState({
//       console.log("Handling interval")
          currentState: QUESTION_STATE,
          counter: 0
        })
        if(this.state.currentState === TITLE_STATE) {
          this.timer = setInterval(() => this.countdown(), 1000)
          clearInterval(this.timer)
        } else {
          this.setState({titleText:"You answered!"})
        }
        }
      }

    start() {
      console.log("Starting!")
      this.setState({titleText: "Starting the Quiz...", counter: 0})
      this.timer = setInterval(() => this.countdown(), 1000)
    }

  render(){
    console.log("RENDER CALLED")
    return(
      <>
      {((this.state.currentState === TITLE_STATE)
        ? <>
        <Text style = {styles.questionText}>{this.state.titleText}</Text>
        <StartButton color = "#e8b390" title = "Start" onPress = {() => this.start()} />
        </>
        : (this.state.currentState === FINAL_STATE)
        ? <Text style = {styles.questionText}>Complete! You Scored: {this.state.score}</Text>
        : <QuestionOnQuiz 
            answers={questions[this.state.currentQuestion].possibleAnswers}
            question={questions[this.state.currentQuestion].question}
            nextQuestion={(correct) => this.nextQuestion(correct)} />
      )}
      <Text style={styles.scores}>Current Score: {this.state.score} </Text>
          <Text style = {styles.timer}>Timer: {this.timeLimit - this.state.counter}</Text>     </>
    )
  }
}

class App extends React.Component{
  render(){
    return(
      <View style = {styles.page}>
        <Text style = {styles.header}>Test your Harry Potter Knowledge!</Text>
        <TitlePage />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create(
  {
  buttonView: {
    backgroundColor: "#d1cab5",
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },

  buttonText: {
    color: "#000000",
    fontSize: 20,
  },

  start: {
    alignItems: "center",
  },

  page: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#000000",
    justifyContent: "center",
    padding: 10,
  },

  header: {
    color: "#ffffff",
    fontSize: 40,
    padding: 10,
    margin: 10,
  },

  scores: {
    color: "#d1cab5",
    fontSize: 20,
    padding: 10
  },

  questionText: {
    color: "#d1cab5",
    fontSize: 20,
    padding: 10
  },

  timer: {
    color: "#860909",
    fontSize: 30,
    padding: 10
  }
  })