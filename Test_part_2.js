let questions = [
    {
        question: "Після яких приголосних пишеться м’який знак у кінці слова для пом’якшення?",
        options: ["Ж, Ч, Ш, Щ", "Д, Т, З, С, Ц, Л, Н", "Б, П, В, М, Ф", "Г, К, Х, Р"],
        answer: 2
    },
    {
        question: "У дієсловах на -ть, -ться м’який знак:",
        options: ["Пишеться завжди", "Пишеться лише після голосних", "Не пишеться", "Пишеться за бажанням"],
        answer: 1
    },
    {
        question: "Після м’якого приголосного л, перед наступним м’яким приголосним:",
        options: ["М’який знак не пишеться", "М’який знак пишеться завжди", "Пишеться лише в кінці слова", "Пишеться тільки після шиплячих"],
        answer: 2
    },
    {
        question: "Після яких звуків м’який знак НЕ пишеться?",
        options: ["Б, П, В, М, Ф", "Ж, Ч, Ш, Щ", "Д, Т, З, С, Ц", "Г, К, Х, Р"],
        answer: 2
    },
    {
        question: "У якому слові м’який знак пишеться після н?",
        options: ["ін/ший", "ремін/чик", "дон/чин", "пан/європейський"],
        answer: 3
    },
    {
        question: "Після букви к, у слові «Лук/ян» і всіх однокореневих пишемо:",
        options: ["М’який знак", "Апостроф", "Дефіс", "Нічого"],
        answer: 2
    },
    {
        question: "Після букви р, що стоїть у кінці складу перед я, ю, є, ї, що позначають два звуки:",
        options: ["М’який знак", "Апостроф", "Нічого", "Дефіс"],
        answer: 2
    },
    {
        question: "У якому випадку перед б, п, в, м, ф не пишеться апостроф?",
        options: ["Якщо стоїть м'який знак", "Якщо стоїть голосний", "Якщо стоїть інший приголосний а не р", "Якщо стоїть шиплячий"],
        answer: 3
    },
    {
        question: "Апостроф ставиться після б, п, в, м, ф у слові:",
        options: ["п/юре", "бур/я", "миш/як", "пор/ядок"],
        answer: 3
    },
    {
        question: "У якому слові апостроф НЕ пишеться?",
        options: ["комп/ютер", "ад/ютант", "кур/йоз", "ін/єкція"],
        answer: 3
    },
    {
        question: "Як пишемо слово «Д/Артаньян»?",
        options: ["З апострофом", "Без апострофа", "Через дефіс", "З м’яким знаком"],
        answer: 1
    },
    {
        question: "Апостроф не ставимо, якщо я, ю, є, ї позначають:",
        options: ["Два звуки", "Один звук", "Голосний звук", "Приголосний звук"],
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
                message = "Відмінний результат! Ви вже близькі до майстерності! Для ще кращого результату радимо повторити білети №3(1), №4(1), №17(1).";
                } else if (percentage >= 50) {
                    message = "Гарний початок! Ви маєте базові знання, які можна покращити. Рекомендуємо звернути увагу на білети №3(1), №4(1), №17(1).";
                    message += `<button onclick="window.location.href='Key_part_1.html'">Проаналізувати результати тестування</button>`;
                } else {
                message = "Не засмучуйтесь! Помилки – це шлях до успіху. Продовжуйте навчання та повторіть білети №3(1), №4(1), №17(1).";
                message += `<button onclick="window.location.href='Key_part_2.html'">Проаналізувати результати тестування</button>`;
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
    