import './App.css'
import Question from './Question'

const quizList = [
  {
    question: "This is question to be asked from user.",
    options: [
      {
        score: 0,
        text: "option 1"
      },
      {
        score: 0,
        text: "option 2"
      },
      {
        score: 0,
        text: "option 3"
      },
      {
        score: 0,
        text: "option 4"
      },
    ]
  }
]

function App() {
  return (
    <div className='quiz-container'>
      <Question {...quizList[0]} length={quizList.length} />
    </div>
  )
}

export default App
