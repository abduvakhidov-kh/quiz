import './App.css'
import Question from './Question'

const quizList = [
  {
    answer: 0,
    score: 10,
    question: "This is question to be asked from user.",
    options: [
      "option 1",
      "option 2",
      "option 3",
      "option 4"
    ]
  },
  {
    answer: 0,
    score: 10,
    question: "This is question to be asked from user.",
    options: [
      "option 1",
      "option 2",
      "option 3",
      "option 4"
    ]
  },
  {
    answer: 0,
    score: 10,
    question: "This is question to be asked from user.",
    options: [
      "option 1",
      "option 2",
      "option 3",
      "option 4"
    ]
  },
]

function App() {
  return (
    <div className='quiz-container'>
      <Question quizList={quizList} length={quizList.length} />
    </div>
  )
}

export default App
