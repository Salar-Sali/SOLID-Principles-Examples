/* -------------------------------------------------------------------------- */
/*                   before following open/closed principle                   */
/* -------------------------------------------------------------------------- */
const QuestionType = {
  Boolean: "boolean",
  MultiChoice: "multi choice",
  Text: "text",
};

/**
 * print a list of questions with their choices:
 * every time when a new question is added, this function needs to be modified
 * this violates open/closed principle
 */
const printQuiz = (questions) => {
  questions.forEach((question) => {
    console.log(question.description);
    switch (question.type) {
      case QuestionType.Boolean:
        question.options.forEach((option, index) => {
          console.log(index + 1, option);
        });
        break;
      case QuestionType.MultiChoice:
        question.options.forEach((option, index) => {
          console.log(index + 1, option);
        });
        break;
      case QuestionType.Text:
        console.log("answer: --------------");
        break;
    }
    console.log("");
  });
};

// a list of questions:
const questions = [
  {
    type: QuestionType.Boolean,
    description: "Is solid priniciple important?",
    options: ["yes", "no"],
  },
  {
    type: QuestionType.MultiChoice,
    description: "What skills do you have?",
    options: ["html", "css", "ts", "js"],
  },
  {
    type: QuestionType.Text,
    description: "Write a long text:",
  },
];

printQuiz(questions);
