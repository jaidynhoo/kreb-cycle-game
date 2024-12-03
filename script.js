// List of stages and corresponding questions/answers
const stages = [
    {
        stage: "ONE",
        question: "Before the Krebs Cycle begins, what molecule is combined with oxaloacetate to form citrate in the first step?",
        answer: "acetyl-CoA"
    },
    {
        stage: "ONE",
        question: "Now that you have acetyl-CoA, where are you moving into for the Krebs Cycle to occur?",
        answer: "the mitochondria"
    },
    {
        stage: "TWO",
        question: "What is the product of the condensation of acetyl-CoA and oxaloacetate, AKA the first intermediate of the Krebs Cycle?",
        answer: "citrate"
    },
    {
        stage: "TWO",
        question: "What is the enzyme that is used to convert oxaloacetate to citrate?",
        answer: "citrate synthase"
    },
    {
        stage: "TWO",
        question: "citrate synthases is negatively regulated by ___ ?",
        answer: "ATP"
    },
    {   
        stage: "THREE",
        question: "Which molecule is formed after citrate undergoes isomerization?",
        answer: "isocitrate"
    },
    {
        stage: "THREE",
        question: "What is the enzyme that is used to convert citrate to isocitrate?",
        answer: "Aconitase"
    },
    {
        stage: "FOUR",
        question: "What molecule is produced from isocitrate after decarboxylation?",
        answer: "alpha-ketoglutarate"
    },
    {
        stage: "FOUR",
        question: "What is the enzyme that is used to convert isocitrate to alpha keto-glutarate?",
        answer: "isocitrate dehydrogenase"
    },
    {
        stage: "FOUR",
        question: "Isocitrate Dehydrogenase is negatively regulated by what 2 things?",
        answer: "ATP and NADH"
    },
    {
        stage: "FOUR",
        question: "Isocitrate Dehydrogenase is positively regulated by what?",
        answer: "ADP"
    },
    {
        stage: "FOUR",
        question: "Due to the NADH produced, how many ATP molecules are generated when isocitrate is converted to a-ketoglutarate?",
        answer: "2.5"
    },
    {
        stage: "FIVE",
        question: "Which molecule is formed from alpha-ketoglutarate after decarboxylation?",
        answer: "succinyl-CoA"
    },
    {
        stage: "FIVE",
        question: "What is the enzyme that is used to convert alpha keto-glutarate to succinyl-CoA?",
        answer: "alpha keto-glutarate dehydrogenase reaction"
    },
    {
        stage: "FIVE",
        question: "Due to the NADH produced, how many ATP molecules are generated when a-ketoglutarate is converted to Succinyl Co-A?",
        answer: "2.5 ATP"
    },
    {
        stage: "SIX",
        question: "What molecule is produced from succinyl-CoA?",
        answer: "succinate"
    },
    {
        stage: "SIX",
        question: "What is the enzyme that is used to convert succinyl-CoA to succinate?",
        answer: "succinyl thiokinase"
    },
    {
        stage: "SIX",
        question: "How many ATP molecules are produced when succinyl CoA is converted to succinate?",
        answer: "1 ATP"
    },
    {
        stage: "SEVEN",
        question: "What molecule is formed from succinate by the enzyme succinate dehydrogenase?",
        answer: "fumarate"
    },
    {
        stage: "SEVEN",
        question: "What is the enzyme that is used to convert succinate to fumarate?",
        answer: "succinate dehydrogenase reaction"
    },
    { 
        stage: "SEVEN",
        question: "How much ATP is generated when succinate is converted to fumarate?, Hint: its from FADH",
        answer: "1.5 ATP"
    },
    { 
        stage: "EIGHT",
        question: "What molecule is formed from fumarate by hydration?",
        answer: "malate"
    },
    {
        stage: "EIGHT",
        question: "What is the enzyme that is used to convert fumarate to malate?",
        answer: "fumarase"
    },
    {
        stage: "NINE",
        question: "What molecule is regenerated from malate in the final step of the cycle?",
        answer: "oxaloacetate"
    },
    {
        stage: "NINE",
        question: "What is the enzyme that is used to convert malate to oxaloacetate?",
        answer: "malate dehydrogenase"
    },
    {
        stage: "NINE",
        question: "How many ATP molecules are produced when malate is converted to oxaloacetate?",
        answer: "2.5 ATP"
    },
    {
        stage: "BONUS",
        question: "Congrats you've completed your journey through the Krebs CYcle! How many ATP did you generate along the way?",
        answer: "10 ATP"
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
