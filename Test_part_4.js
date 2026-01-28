let questions = [
    {
        question: "Що таке складнопідрядне речення (СПР)?",
        options: [
            "Речення з двох і більше незалежних частин",
            "Речення з двох і більше простих речень, залежних одне від одного",
            "Речення, в яких дії відбуваються одночасно",
            "Речення, які з’єднуються лише безсполучниково"],
        answer: 2
    },
    {
        question: "Який зв’язок використовують у складнопідрядних реченнях?",
        options: [
            "Тільки сполучники підрядності",
            "Тільки сполучні слова",
            "Сполучники підрядності та сполучні слова",
            "Безсполучниковий зв’язок"],
        answer: 3
    },
    {
        question: "Який тип підрядного речення відповідає на питання «який? яка? яке? які?»?",
        options: [
            "Обставинне місця",
            "З’ясувальне",
            "Означальне",
            "Обставинне способу дії"
        ],
        answer: 3
    },
    {
        question: "Які сполучники використовують у з’ясувальних реченнях?",
        options: [
            "що, як, ніби, наче",
            "що, щоб, ніби",
            "як, мовби, немов",
            "бо, тому що, через те що"
        ],
        answer: 1
    },
    {
        question: "У якому реченні вжито обставинне місця?",
        options: [
            "Тепер я скрізь, де світло і любов.",
            "Пішла вночі до ворожки, щоб поворожити.",
            "Доки сонце зійде, роса очі виїсть.",
            "Сердега так перелякався, що аж тремтить."
        ],
        answer: 1
    },
    {
        question: "Яке підрядне речення відповідає на питання «з якою метою?»?",
        options: [
            "Обставинне часу",
            "Обставинне умови",
            "Обставинне мети",
            "Обставинне наслідку"
        ],
        answer: 3
    },
    {
        question: "У якому реченні вжито складений сполучник, який комами не розділяють?",
        options: [
            "Перш ніж розпочати роботу, потрібно підготувати матеріали.",
            "Навіть якщо буде важко, ми не здаємося.",
            "Лише коли всі були готові, розпочали урок.",
            "Усі відповіді правильні."
        ],
        answer: 4
    },
    {
        question: "Який сполучник використовується у підрядних реченнях причини?",
        options: [
            "коли, аби, якщо",
            "бо, тому що, через те що",
            "як, мовби, немов",
            "що, щоб, ніби"
        ],
        answer: 2
    },
    {
        question: "Коли в складносурядних реченнях НЕ ставиться кома?",
        options: [
            "Якщо є спільний другорядний член речення",
            "Якщо є спільне вставне слово",
            "Якщо речення є питальними чи окличними",
            "Усі відповіді правильні"
        ],
        answer: 4
    },
    {
        question: "Який розділовий знак використовується у ССР перед сполучниками при різкому протиставленні?",
        options: [
            "Крапка з комою",
            "Дефіс",
            "Кома",
            "Тире"
        ],
        answer: 4
    },
    {
        question: "У якому випадку ставиться крапка з комою у СРР?",
        options: [
            "Якщо речення за змістом пов’язані",
            "Якщо речення дуже поширені та мають свої розділові знаки",
            "Якщо речення вказують на одночасність дій",
            "Якщо речення мають спільне вставне слово"
        ],
        answer: 2
    },
    {
        question: "Які частини речення поєднують сполучники сурядності?",
        options: [
            "Головну і підрядну частини",
            "Рівноправні частини складносурядного речення",
            "Тільки головні члени речення",
            "Тільки підрядні частини"
        ],
        answer: 2
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
                    message = "Відмінний результат! Ви вже близькі до майстерності! Для ще кращого результату радимо повторити білети №3(2), №4(2), №16(2).";
                    } else if (percentage >= 50) {
                    message = "Гарний початок! Ви маєте базові знання, які можна покращити. Рекомендуємо звернути увагу на білети №3(2), №4(2), №16(2).";
                    message += `<button onclick="window.location.href='Key_part_4.html'">Проаналізувати результати тестування</button>`;
                } else {
                    message = "Не засмучуйтесь! Помилки – це шлях до успіху. Продовжуйте навчання та повторіть білети №3(2), №4(2), №16(2).";
                    message += `<button onclick="window.location.href='Key_part_4.html'">Проаналізувати результати тестування</button>`;
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