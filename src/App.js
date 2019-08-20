import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard'
import LikesButton from './components/LikesButton'
import DigitalClock from './components/DigitalClock'
import CommentBox from './components/CommentBox'
import CommentList from './components/CommentList'

const tags = ['恐龙', '足球小子']
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: ['this is my first reply', 'my second reply']
    }
    this.addComment = this.addComment.bind(this)
  }

  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment] //...表达式  将comment插入到comments后面
    })
  }

  render() {
    const { comments } = this.state
    return (
      <div className="App">


        <CommentList comments={comments} />
        <CommentBox
          commentsLength={comments.length}
          onAddComment={this.addComment}
        />


        <DigitalClock />
        <LikesButton></LikesButton>
        <NameCard name="King" number={13066015999} isHuman tags={tags} />




        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>



      </div>
    );
  }
}


export default App;
