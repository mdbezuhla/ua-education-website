let questions = [
    {
        question: "Як пишуться складні прикметники, утворені від складних іменників, які пишемо разом?",
        options: [
            "Через дефіс",
            "Разом",
            "Окремо",
            "У лапках"
        ],
        answer: 2
    },
    {
        question: "Як пишемо складні прикметники з першою частиною, яка закінчується на -іко або -ико?",
        options: [
            "Разом",
            "Окремо",
            "Через дефіс",
            "У лапках"
        ],
        answer: 3
    },
    {
        question: "Які прикметники пишемо через дефіс?",
        options: [
            "Складні прикметники з числівником у складі",
            "Складні прикметники з першою частиною військово, воєнно",
            "Прикметники, які означають колір і є однослівними",
            "Прикметники, які вказують на матеріал"
        ],
        answer: 2
    },
    {
        question: "Як пишуться складні прикметники, що мають відтінки кольорів?",
        options: [
            "Окремо",
            "Разом",
            "Через дефіс",
            "З великої літери"
        ],
        answer: 3
    },
    {
        question: "Яка форма ступеня порівняння прислівників утворюється за допомогою суфіксів -ше та -іше?",
        options: [
            "Найвищий ступінь",
            "Вищий ступінь",
            "Нульовий ступінь",
            "Початковий ступінь"
        ],
        answer: 2
    },
    {
        question: "Які суфікси характерні для творення прислівників?",
        options: [
            "-ий, -а, -е",
            "-о, -е, -и, -ому, -єму",
            "-ся, -ш, -ть",
            "-ти, -но, -чи"
        ],
        answer: 2
    },
    {
        question: "Як пишуться префікси роз-, без-, через- перед голосними?",
        options: [
            "З буквою с",
            "З буквою з",
            "Окремо від кореня",
            "Через дефіс"
        ],
        answer: 2
    },
    {
        question: "Який приклад правильного використання префікса при-?",
        options: [
            "Присісти, прилад, природа",
            "Прибрати, приїхати, пригорнути",
            "Прибігти, пригорнути, припинити",
            "Прізвище, прізвисько, прірва"
        ],
        answer: 3
    },
    {
        question: "До якого розряду належать числівники 'одна третя', 'п’ять дев’ятих'?",
        options: [
            "Власне кількісні",
            "Дробові",
            "Порядкові",
            "Збірні"
        ],
        answer: 2
    },
    {
        question: "У яких числівниках у кінці пишемо м’який знак?",
        options: [
            "Сім, вісім",
            "П’ять, сімнадцять, тридцять",
            "Один, два, три",
            "Чотири, дев’ять"
        ],
        answer: 2
    },
    {
        question: "Який прикметник є відносним?",
        options: [
            "Смачний",
            "Глиняний",
            "Яскравий",
            "Кислий"
        ],
        answer: 2
    },
    {
        question: "Який числівник є складеним?",
        options: [
            "Десять",
            "Тридцять",
            "Двадцять п’ять",
            "Сім"
        ],
        answer: 3
    }
];


        let currentQuestionIndex = 0;
        let score = 0;
        let timeLimit = 20;
        let timerInterval;

        document.addEventListener('DOMContentLoaded', () => loadQuestion());

        function loadQuestion() {
            if (currentQuestionIndex < questions.length) {
                const questionElement = document.getElementById("question");
                const optionsElement = document.getElementById("options");
                const questionHeader = document.getElementById("question-header");
                const currentQuestion = questions[currentQuestionIndex];

                questionHeader.textContent = `Питання ${currentQuestionIndex + 1}/12`;
                questionElement.textContent = currentQuestion.question;
                optionsElement.innerHTML = ""; // очищаємо попередні варіанти

                currentQuestion.options.forEach((option, index) => {
                    const button = document.createElement("button");
                    button.textContent = option;
                    button.className = "option";
                    button.onclick = () => checkAnswer(index);
                    optionsElement.appendChild(button);
                });

                resetTimer(); // Скидання таймера при завантаженні нового питання
            } else {
                showResult();
            }
        }

        function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestionIndex].answer - 1) { // Зменшуємо індекс відповіді на 1
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}


        function showResult() {
            clearInterval(timerInterval);
            const resultElement = document.getElementById("result");
            resultElement.textContent = `Ви набрали ${score} з ${questions.length} балів.`;
        
            let message;
            const percentage = (score / questions.length) * 100;
        
           
            if (percentage === 100) {
                message = "Фантастично! Ви справжній знавець української мови! Ваші знання бездоганні!";
                } else if (percentage >= 75) {
                message = "Відмінний результат! Ви вже близькі до майстерності! Для ще кращого результату радимо повторити білети №5(2), №21(1), №22(1), №23(1).";
                } else if (percentage >= 50) {
                message = "Гарний початок! Ви маєте базові знання, які можна покращити. Рекомендуємо звернути увагу на білети №5(2), №21(1), №22(1), №23(1).";
                message += `<button onclick="window.location.href='Key_part_5.html'">Проаналізувати результати тестування</button>`;
            } else {
                message = "Не засмучуйтесь! Помилки – це шлях до успіху. Продовжуйте навчання та повторіть білети №5(2), №21(1), №22(1), №23(1).";
                message += `<button onclick="window.location.href='Key_part_5.html'">Проаналізувати результати тестування</button>`;
            }
        
                resultElement.innerHTML += ` ${message}`;
                resultElement.style.display = 'block';
            
                // Приховуємо всі елементи, крім результату
                document.getElementById("question").classList.add('hidden');
                document.getElementById("options").classList.add('hidden');
                document.getElementById("timer").classList.add('hidden');
                document.getElementById("progress-container").classList.add('hidden');
            }

        function startTimer() {
            const timerElement = document.getElementById("timer");
            const progressBar = document.getElementById("progress-bar");
            let timeRemaining = timeLimit;
            timerInterval = setInterval(() => {
                timeRemaining--;
                timerElement.textContent = `Час: ${timeRemaining} секунд`;
                progressBar.style.width = `${(timeRemaining / timeLimit) * 100}%`;

                if (timeRemaining <= 0) {
                    clearInterval(timerInterval);
                    showResult();
                }
            }, 1000);
        }

        function resetTimer() {
            clearInterval(timerInterval); // Очищення попереднього таймера
            startTimer(); // Почати новий таймер
        }