function StartScreen({ numQuestions, dispach }) {
  return (
    <div className="start">
      <h2>Welcom to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={() => dispach({ type: "start" })}>
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
