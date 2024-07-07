const mcq = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Paris"
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Leo Tolstoy", "William Shakespeare", "Mark Twain", "Charles Dickens"],
      answer: "William Shakespeare"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter"
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Gold", "Silver", "Iron"],
      answer: "Oxygen"
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Platinum"],
      answer: "Diamond"
    },
    {
      question: "In which year did the Titanic sink?",
      options: ["1905", "1912", "1923", "1898"],
      answer: "1912"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Claude Monet", "Leonardo da Vinci", "Pablo Picasso"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yuan", "Won", "Yen", "Ringgit"],
      answer: "Yen"
    },
    {
      question: "Who developed the theory of relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
      answer: "Albert Einstein"
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      answer: "Canberra"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mercury", "Venus", "Mars", "Jupiter"],
      answer: "Mars"
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
      answer: "Vatican City"
    },
    {
      question: "Who is known as the Father of Computers?",
      options: ["Alan Turing", "Bill Gates", "Charles Babbage", "Steve Jobs"],
      answer: "Charles Babbage"
    },
    {
      question: "Which ocean is the largest?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      answer: "Pacific Ocean"
    },
    {
      question: "Which country gifted the Statue of Liberty to the United States?",
      options: ["Germany", "France", "Italy", "Spain"],
      answer: "France"
    }
  ];
  
  let score = 0;
  let currentQuestionIndex = 0;
  const quiz = document.querySelector(".quiz");
  const questionElement = document.querySelector("#question");
  const optionsElement = document.querySelector(".option");
  const btn = document.querySelector("#subbtn");
  
  function displayQuestion(index) {
    questionElement.innerHTML = `<h1>Q${index + 1}. ${mcq[index].question}</h1>`;
    optionsElement.innerHTML = `
      <button class="option-btn">${mcq[index].options[0]}</button><br>
      <button class="option-btn">${mcq[index].options[1]}</button><br>
      <button class="option-btn">${mcq[index].options[2]}</button><br>
      <button class="option-btn">${mcq[index].options[3]}</button>`;
    
    const optionButtons = document.querySelectorAll(".option-btn");
    optionButtons.forEach(button => {
      button.addEventListener("click", (e) => {
        const selectedOption = e.target.innerHTML;
        if (selectedOption === mcq[index].answer) {
          score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < mcq.length) {
          displayQuestion(currentQuestionIndex);
        } else {
          quiz.innerHTML = `<span>YOUR SCORE <br><br> ${score} <br><br><a href="./index.html">Restart</a></span>`;
        }
      });
    });
  }
  
  btn.addEventListener("click", () => {
    displayQuestion(currentQuestionIndex);
    btn.style.display = 'none'; 
  });
  