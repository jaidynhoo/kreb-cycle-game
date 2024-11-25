// List of stages and corresponding questions/answers
const stages = [
    {
        stage: "ONE",
        question: "What molecule is combined with oxaloacetate to form citrate in the first step?",
        answer: "acetyl-CoA"
    },
    {
        stage: "TWO",
        question: "What is the product of the condensation of acetyl-CoA and oxaloacetate?",
        answer: "citrate"
    },
    {
        stage: "THREE",
        question: "Which molecule is formed after citrate undergoes isomerization?",
        answer: "isocitrate"
    },
    {
        stage: "FOUR",
        question: "What molecule is produced from isocitrate after decarboxylation?",
        answer: "alpha-ketoglutarate"
    },
    {
        stage: "FIVE",
        question: "Which molecule is formed from alpha-ketoglutarate after decarboxylation?",
        answer: "succinyl-CoA"
    },
    {
        stage: "SIX",
        question: "What molecule is produced from succinyl-CoA after substrate-level phosphorylation?",
        answer: "succinate"
    },
    {
        stage: "SEVEN",
        question: "What molecule is formed from succinate by the enzyme succinate dehydrogenase?",
        answer: "fumarate"
    },
    {
        stage: "EIGHT",
        question: "What molecule is formed from fumarate by hydration?",
        answer: "malate"
    },
    {
        stage: "NINE",
        question: "What molecule is regenerated from malate in the final step of the cycle?",
        answer: "oxaloacetate"
    }
];

let currentStage = 0;

// Display the current stage and question
function displayStage() {
    const stage = stages[currentStage];
    document.getElementById("stage-name").textContent = `Stage: ${stage.stage}`;
    document.getElementById("question").textContent = stage.question;
    document.getElementById("feedback").textContent = "";
    document.getElementById("next-button").style.display = "none";
    document.getElementById("answer").value = "";
}

// Check the player's answer
function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = stages[currentStage].answer.toLowerCase();
    
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done!";
        document.getElementById("next-button").style.display = "inline-block";
    } else {
        document.getElementById("feedback").textContent = `Incorrect. The correct answer is: ${stages[currentStage].answer}`;
    }
}

// Move to the next stage
function nextStage() {
    currentStage++;
    if (currentStage < stages.length) {
        displayStage();
    } else {
        document.getElementById("feedback").textContent = "Congratulations! You have completed the Krebs Cycle!";
        document.getElementById("next-button").style.display = "none";
    }
}

// Initialize the game
window.onload = displayStage;
