let questions = [
    {
        question: "Як правильно пишуться загальні назви, утворені від імен або прізвищ?",
        options: ["З великої літери", "З малої літери", "Через дефіс", "У лапках"],
        answer: 2
    },
    {
        question: "Яке слово пишеться з великої літери?",
        options: ["міністр", "доктор наук", "генеральний секретар ООН", "народний артист України"],
        answer: 3
    },
    {
        question: "Як пишеться назва пошукової системи без родового слова?",
        options: ["\"Гугл\"", "Гугл", "\"гугл\"", "гугл"],
        answer: 4
    },
    {
        question: "Як пишеться слово \"(А/а)кадемія (Н/н)аук України\"?",
        options: ["Академія Наук України", "Академія наук України", "академія наук України", "академія Наук України"],
        answer: 2
    },
    {
        question: "Виберіть правильне написання присвійного прикметника:",
        options: ["шевченкові твори", "Шевченкові твори", "шевченківський стиль", "Шевченківський стиль"],
        answer: 2
    },
    {
        question: "Як пишуться прислівники, утворені поєднанням прийменника та числівника?",
        options: ["Разом", "Окремо", "Через дефіс", "У лапках"],
        answer: 1
    },
    {
        question: "Оберіть правильний спосіб написання слова:",
        options: ["навкругі", "навкругу", "навкруги", "навкруг"],
        answer: 3
    },
    {
        question: "У якому випадку пишеться через дефіс?",
        options: ["на..совість", "спокон..віків", "мало..помалу", "до..дому"],
        answer: 3
    },
    {
        question: "Який варіант правильний для власних назв типу \"(К/к)иївський (Б/б)удинок (М/м)од\"?",
        options: ["Київський Будинок Мод", "Київський будинок мод", "київський будинок мод", "Київський будинок Мод"],
        answer: 2
    },
    {
        question: "Оберіть правильний варіант написання слова",
        options: ["раз у раз", "раз-у-раз", "разураз", "раз ураз"],
        answer: 1
    },
    {
        question: "Як пишеться прислівник із префіксом \"по\" і основою на к, ч, ж?",
        options: ["по-ведмежі", "по-ведмежи", "по ведмежи", "по ведмежі"],
        answer: 2
    },
    {
        question: "Який варіант написання правильний для назви орденів, медалей?",
        options: ["Медаль «за відвагу», Орден Пошани", "медаль «За відвагу», орден Пошани", "медаль За відвагу, орден «Пошани»", "медаль за відвагу, орден пошани"],
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
                    message = "Відмінний результат! Ви вже близькі до майстерності! Для ще кращого результату радимо повторити: білет №1 та білет №28.";
                 
                } else if (percentage >= 50) {
                    message = "Гарний початок! Ви маєте базові знання, які можна покращити. Рекомендуємо звернути увагу на: білет №1 та білет №28.";
                    message += `<button onclick="window.location.href='Key_part_1.html'">Проаналізувати результати тестування</button>`;
                } else {
                    message = "Не засмучуйтесь! Помилки – це шлях до успіху. Продовжуйте навчання та повторіть: білет №1 та білет №28.";
                    message += `<button onclick="window.location.href='Key_part_1.html'">Проаналізувати результати тестування</button>`;
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