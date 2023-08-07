function UsersQuestions() {
  return (
    <div className="question-div">
      {" "}
      <div className="qusetion-container">
        <div className="question-img">
          <img src="/asset/question-img.svg" />
        </div>
        <div className="questions">
          <p>How do I know the perfect plan for me?</p>
          <p>How are the units calculated?</p>
          <p>Is it only for tests?</p>
          <p>What is live monitoring?</p>
          <p>Is it virus, glitch, or hack-proof?</p>
          <p>Can I use it for a larger number of candidates?</p>
          <p>How do I notify candidates before tests?</p>
          <p>Can I download the recorded videos for future use?</p>
          <p>
            If I get stuck (internet, network issues) what happens to my test?
          </p>
        </div>
      </div>
      <div className="looking-for">
        <p>Did not get what you are looking for?</p>
        <button className="get-btn">Get Help</button>
      </div>
    </div>
  );
}
export default UsersQuestions;
