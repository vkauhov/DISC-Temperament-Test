const questions = [
  {
    question: "1. Ви прийшли в гості, де вже зібралося понад 10 осіб. Ваша реакція:",
    options: [
      { text: "А) Клас! Обожнюю галасливі компанії — можна повеселитися, познайомитися з новими людьми.", type: "I" },
      { text: "Б) Я люблю бувати в компаніях, часто опиняюся в центрі уваги. Або вдасться добре «запалити», або, принаймні, познайомлюсь із корисними людьми.", type: "C" },
      { text: "В) Сподіваюся зустріти тут знайомих — буде приємно поспілкуватися. Якщо всі незнайомі, мені буде некомфортно.", type: "S" },
      { text: "Г) Я не надто люблю галасливі компанії. На вечірки ходжу лише для того, щоб завести чи підтримати корисні знайомства. Мені приємніше посидіти з 1–2 людьми в тиші.", type: "D" }
    ]
  },
  {
    question: "2. На цій же вечірці вас попросили виголосити тост. Ваша реакція:",
    options: [
      { text: "А) Не люблю привертати до себе увагу, ненавиджу говорити тости. Не відмовлюся прямо, але й не погоджуся — якось ухилюся.", type: "S" },
      { text: "Б) Я добре розповідаю і знаю кілька кумедних тостів. Усі будуть у захваті.", type: "I" },
      { text: "В) Не боюся виступати — мені це навіть подобається. Скажу щось розумне й доречне.", type: "C" },
      { text: "Г) Швидше за все, відмовлюсь під переконливим приводом. Але якщо треба справити хороше враження, можу виголосити доречний витончений тост.", type: "D" }
    ]
  },
  {
    question: "3. Начальник дав вам і колезі завдання, але не призначив відповідального. Ви обидва забули про нього. Тепер начальник вас сварить. Ваша реакція:",
    options: [
      { text: "А) Негативні емоції, але зовні не показую. Контролюю себе, але зроблю висновки і буду обережнішим у майбутньому.", type: "C" },
      { text: "Б) Емоційна реакція, можливо, навіть сльози. Так, я не дуже пунктуальний, але винен не лише я. Розповідатиму друзям, як мене підставили.", type: "S" },
      { text: "В) Образа на колегу: як він міг мене підставити? Образа на начальника. Довго переживатиму, швидше за все мовчки.", type: "I" },
      { text: "Г) Злість на начальника або колегу. Вибух агресивних емоцій, швидше за все, щось їм скажу прямо.", type: "D" }
    ]
  },
  {
    question: "4. Вам дали важливе завдання, термін — місяць, але виконати можна за два тижні. Ваша реакція:",
    options: [
      { text: "А) Краще зроблю якомога швидше — і виглядатиму добре, і буде час на інші справи.", type: "D" },
      { text: "Б) Спершу все обміркую. Навіть якщо зроблю завчасно, здам ближче до дедлайну — ще раз перегляну й виправлю.", type: "C" },
      { text: "В) Візьмуся відразу, але швидко набридне — займуся чимось іншим. Потім усе дороблятиму в останній момент.", type: "I" },
      { text: "Г) Хочу зробити відразу, але не вийде. Завжди щось важливіше. Швидше за все, робитиму все в останній момент.", type: "S" }
    ]
  },
  {
    question: "5. Попереду довгі вихідні. Куди вирушите:",
    options: [
      { text: "А) До родичів або провести день із сім’єю/дружиною/чоловіком.", type: "S" },
      { text: "Б) У парк або на вечірку з друзями.", type: "I" },
      { text: "В) На картинг чи грати у футбол з друзями.", type: "D" },
      { text: "Г) На концерт або виставку — наодинці чи з близькою людиною.", type: "C" }
    ]
  },
  {
    question: "6. Якби вирішили стрибнути з парашутом, то з якої причини:",
    options: [
      { text: "А) Познайомився з цікавими людьми, які цим займаються — вмовили приєднатися.", type: "S" },
      { text: "Б) Це потрібно для досягнення важливої цілі.", type: "C" },
      { text: "В) Люблю ризик і адреналін. Хочу перевірити себе.", type: "D" },
      { text: "Г) Мене вважають тихонею. Хочу довести собі й іншим, що не боягуз.", type: "I" }
    ]
  },
  {
    question: "7. Які коментарі ви найчастіше чуєте про себе (на роботі й удома):",
    options: [
      { text: "А) «А можна швидше?» «Знову тянеш час!» «Скільки можна обговорювати одне й те саме?»,", type: "S" },
      { text: "Б) «Будь ласка, повільніше» «Ти всіх кудись поспішаєш» «Тобі вже все ясно, а мені — ні. Давай не поспішатимемо».", type: "C" }
    ]
  },
  {
    question: "8. Вас вирішили підвищити на посаді. Перше, що зробите:",
    options: [
      { text: "А) Повідомлю рідним, влаштую домашнє свято.", type: "S" },
      { text: "Б) Куплю собі щось дороге — щоб прийти на нову посаду у відповідному вигляді.", type: "C" },
      { text: "В) Поділюся радістю з друзями, влаштую гучну вечірку.", type: "I" },
      { text: "Г) Не радітиму заздалегідь — ще нічого не підписано, рано святкувати.", type: "D" }
    ]
  },
  {
    question: "9. Завтра іспит. Як дієте:",
    options: [
      { text: "А) Повторю матеріал швидко, щоб ще мати час на інші справи.", type: "D" },
      { text: "Б) Повторюватиму повільно, хоч і всю ніч.", type: "C" },
      { text: "В) Краще висплюся — готувався заздалегідь, прийду зі свіжою головою.", type: "S" },
      { text: "Г) Перед смертю не надихаєшся. Краще піду повеселюсь.", type: "I" }
    ]
  },
  {
    question: "10. Що, на вашу думку, головне для успіху:",
    options: [
      { text: "А) Особисті зусилля кожного. Треба викладатися на максимум.", type: "D" },
      { text: "Б) Командна робота. Люди можуть досягти успіху лише разом.", type: "I" }
    ]
  },
  {
    question: "11. Якби ви відкривали бізнес (успіх гарантовано), що б обрали:",
    options: [
      { text: "А) Фірму фінансового консалтингу або боротьби з комахами.", type: "C" },
      { text: "Б) Охоронну фірму.", type: "D" },
      { text: "В) Ресторан або нічний клуб.", type: "I" },
      { text: "Г) Медичний центр або бюро добрих послуг.", type: "S" }
    ]
  },
  {
    question: "12. У вас новий кабінет. Як прикрасите стіни:",
    options: [
      { text: "А) Фото з відомими людьми або яскравими сучасними картинами.", type: "I" },
      { text: "Б) Фото родини чи колективу.", type: "S" },
      { text: "В) Дипломами або нейтральними картинами.", type: "C" },
      { text: "Г) Портретом президента чи старовинною шаблею.", type: "D" }
    ]
  },
  {
    question: "13. Що ви найбільше цінуєте в одязі:",
    options: [
      { text: "А) Ізюминку, кураж.", type: "I" },
      { text: "Б) Дорогий вигляд.", type: "C" },
      { text: "В) Зручність.", type: "S" },
      { text: "Г) Якість і доречність — відповідність віку, фігурі, ситуації.", type: "D" }
    ]
  },
  {
    question: "14. У якому змаганні вам буде найкомфортніше ймовірніше перемогти:",
    options: [
      { text: "А) Індивідуальні, де важлива кмітливість (шахи, більярд,).", type: "C" },
      { text: "Б) Індивідуальні на швидкість і сміливість (парашут, автогонки, лижі).", type: "D" },
      { text: "В) Командні, краще незвичайні (футбол у багнюці, корпоративні старти).", type: "I" },
      { text: "Г) Командні, де важлива підтримка (змагання університетів, керлінг).", type: "S" }
    ]
  },
  {
    question: "15. Обираєте готель у Львові. Що виберете:",
    options: [
      { text: "А) Пристойний готель у центрі, щоб не було соромно.", type: "C" },
      { text: "Б) Цікавий, незвичний міні-готель.", type: "I" },
      { text: "В) Той, де вже зупинявся або радили знайомі.", type: "S" },
      { text: "Г) Ідеальне співвідношення ціни й якості, можливо, в старовинному будинку.", type: "D" }
    ]
  }
];
        
  
let currentQuestion = 0;
let scores = { D: 0, I: 0, S: 0, C: 0 };
let selectedAnswers = new Array(questions.length).fill(null);

// Функція для початку тесту
function startTest() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("test-screen").classList.remove("hidden");
  showQuestion();
}

// Функція для показу питання
function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;

  const optionsBox = document.getElementById("options");
  optionsBox.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option.text;
    btn.className = "block w-full bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded transition mb-2";

    if (selectedAnswers[currentQuestion] === index) {
      btn.classList.add("bg-blue-300");
    }

    btn.onclick = () => {
      const prevIndex = selectedAnswers[currentQuestion];
      if (prevIndex !== null) {
        const prevType = q.options[prevIndex].type;
        scores[prevType]--;
      }

      selectedAnswers[currentQuestion] = index;
      const selectedType = option.type;
      scores[selectedType]++;
      nextQuestion();
    };

    optionsBox.appendChild(btn);
  });

  document.getElementById("back-button").classList.toggle("hidden", currentQuestion === 0);
  document.getElementById("next-button").textContent = currentQuestion === questions.length - 1 ? "Завершити" : "Пропустити";
}

// Переходить до наступного питання
function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showResults();
  }
}

// Повернення до попереднього питання
function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
}

// Функція для показу результатів
function showResults() {
  document.getElementById("test-screen").classList.add("hidden");
  document.getElementById("results-screen").classList.remove("hidden");

  const maxScores = { D: 0, I: 0, S: 0, C: 0 };

  questions.forEach(q => {
    q.options.forEach(option => {
      maxScores[option.type]++;
    });
  });

  const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  let resultText = "";

  sortedScores.forEach(([type, score]) => {
    const maxScore = maxScores[type];
    const percentage = ((score / maxScore) * 100).toFixed(2);
    resultText += `<div class="result-type ${type}">
                    <span>${getTypeDescription(type)}</span>
                    <span class="emoji">${getTypeEmoji(type)}</span>
                    <span class="font-bold">${score} балів (${percentage}%)</span>
                  </div>`;
  });

  document.getElementById("results").innerHTML = resultText;
}

// Опис типів
function getTypeDescription(type) {
  switch (type) {
    case "D": return "Тип D (Домінантний): Лідер, рішучий, орієнтований на результат.";
    case "I": return "Тип I (Інтузіаст): Комунікабельний, енергійний, надихає інших.";
    case "S": return "Тип S (Стабільний): Надійний, спокійний, терплячий.";
    case "C": return "Тип C (Аналітик): Точний, логічний, обережний.";
    default: return "";
  }
}

// Емодзі для типів
function getTypeEmoji(type) {
  switch (type) {
    case "D": return "💪";
    case "I": return "😊";
    case "S": return "🌿";
    case "C": return "📊";
    default: return "";
  }
}

// Запуск тесту
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("start-button").onclick = startTest;
  document.getElementById("back-button").onclick = previousQuestion;
  document.getElementById("next-button").onclick = nextQuestion;
});
