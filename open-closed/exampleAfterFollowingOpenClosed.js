/* -------------------------------------------------------------------------- */
/*              An example after following open/closed priniciple             */
/* -------------------------------------------------------------------------- */

const QuestionType = {
  Boolean: "boolean",
};

class BooleanQuestion {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }

  printQuestionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}

class MultiChoiceQuestion {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }

  printQuestionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}

/**
 * it is possible to add questions to this array without changing any class
 * instead of modifying BooleanQuestion class, we created a new one MultiChoiceQuestion class
 */
const questions = [
  new BooleanQuestion("is following SOLID principle useful?", ["yes", "no"]),
  new MultiChoiceQuestion("what skills do you have?", [
    "html",
    "css",
    "js",
    "ts",
  ]),
];

/**
 * print a list of questions:
 * this function will not be modified when a new question is added
 */
const printQuiz = (questions) => {
  questions.forEach((question) => {
    console.log(question.description);
    question.printQuestionChoices();
    console.log("");
  });
};

printQuiz(questions);
