// question
// 	--- 4 answers
// 	--- info about which is correct
// 	--- question itself


const questions = [
	{
		text: "What is?",
		answers: [
			{
				text:"Bears",
				correct: true,
			}, 
			{
				text:"Vikings",
				correct: false,
			},
			{
				text:"Packers",
				correct: false,
			},
			{
				text:"Lions",
				correct: false,
			},	 
		],
	},

	{

		text: "Who is?",
		answers: [
			{
				text: "Eagles",
				correct: true,
			},
			{   
				text: "Falcons",
				correct: false,
			},	
			{
				text: "Patriots",
				correct: false,
			},
			{	
				text: "Dolphins",
				correct: false,
			},
		],
	},
	
	{	
		text: "Where is?",
		answers: [
			{
				text: "Chicago",
				correct: true,
			},
			{   
				text: "Green Bay",
				correct: false,
			},	
			{
				text: "Minnesota",
				correct: false,
			},
			{	
				text: "Miami",
				correct: false,

			},
		],
	},
	
	{	
		text: "Who is?",
		answers: [
			{
				text: "Rodger Goodell",
				correct: true,
			},
			{   
				text: "Brian Pace",
				correct: false,
			},	
			{
				text: "Mike Nagy",
				correct: false,
			},
			{	
				text: "Nunzio Campanelli",
				correct: false,

			},
		],
	},
	
	{	
		text: "Where is?",
		answers: [
			{
				text: "Ohio",
				correct: true,
			},
			{   
				text: "Illinois",
				correct: false,
			},	
			{
				text: "Missouri",
				correct: false,
			},
			{	
				text: "Florida",
				correct: false,

			},
		],
	},
	
	{	
		text: "Who is?",
		answers: [
			{
				text: "Dan Marino",
				correct: true,
			},
			{   
				text: "Doug Flutie",
				correct: false,
			},	
			{
				text: "Michael Jordon",
				correct: false,
			},
			{	
				text: "Daffy Duck",
				correct: false,

			},
		],
	},

	{
		text: "Laces out...?",
		answers: [
			{
				text: "Dan",
				correct: true,
			},
			{   
				text: "Doug",
				correct: false,
			},	
			{
				text: "Don",
				correct: false,
			},
			{	
				text: "Daffy",
				correct: false,

			},
		],
	},

		{
		text: "Nickname?",
		answers: [
			{
				text: "The Great One",
				correct: true,
			},
			{   
				text: "The Golden Jet",
				correct: false,
			},	
			{
				text: "Nature Boy",
				correct: false,
			},
			{	
				text: "Zippy",
				correct: false,

			},
		],
	},

		{
		text: "What Year?",
		answers: [
			{
				text: "1919",
				correct: true,
			},
			{   
				text: "2010",
				correct: false,
			},	
			{
				text: "2013",
				correct: false,
			},
			{	
				text: "2015",
				correct: false,

			},
		], 
	},
		{
		text: "What City?",
		answers: [
			{
				text: "Chicago",
				correct: true,
			},
			{   
				text: "New York",
				correct: false,
			},	
			{
				text: "Los Angeles",
				correct: false,
			},
			{	
				text: "Alberqerque",
				correct: false,

			},
		],
	},
		{
		text: "What Ball?",
		answers: [
			{
				text: "Football",
				correct: true,
			},
			{   
				text: "Baseball",
				correct: false,
			},	
			{
				text: "Golden Snitch",
				correct: false,
			},
			{	
				text: "Birdie",
				correct: false,

			},
		],
	},

		{
		text: "What Bat?",
		answers: [
			{
				text: "Baseball Bat",
				correct: true,
			},
			{   
				text: "Cricket Bat",
				correct: false,
			},	
			{
				text: "Batman",
				correct: false,
			},
			{	
				text: "Birdman",
				correct: false,

			},
		],
	},

		{
		text: "What Field?",
		answers: [
			{
				text: "Pitch",
				correct: true,
			},
			{   
				text: "Diamond",
				correct: false,
			},	
			{
				text: "Court",
				correct: false,
			},
			{	
				text: "Green",
				correct: false,

			},
		],
	},	
		{
		text: "What Statdium?",
		answers: [
			{
				text: "Soldier Field",
				correct: true,
			},
			{   
				text: "Gillete Statdium",
				correct: false,
			},	
			{
				text: "Chicago Stadium",
				correct: false,
			},
			{	
				text: "Lambeau Field",
				correct: false,

			},
		],
	},	

	{
		text: "Duo Nickname?",
		answers: [
			{
				text: "Bash Brothers",
				correct: true,
			},
			{   
				text: "Super Smash Brothers",
				correct: false,
			},	
			{
				text: "Yoshi and Luigi",
				correct: false,
			},
			{	
				text: "Step Brothers",
				correct: false,

			},
		],
	},
]

class User {
	// score = 0; //Everyone starts at zero
}

const game = {
	score: 0,
	usedQuestions: [],
	
	start: function(){
		this.showQuestion()
	},


	// user sees question w answers:
	showQuestion: function() { // 1. get this working

		// get question out of main array
		const displayedQuestion = questions.pop();
		console.log(displayedQuestion);

		const displayedAnswers = displayedQuestion.answers
		for(let i = 0; i < displayedQuestion.answers.length; i++){
			const $answerDiv = $('<div/>'); 
			
			// somehow put whether this is correct "in" the button

			$answerDiv.text(displayedQuestion.answers[i].text);
			$(`#answer-${i+1}`).append($answerDiv);
			console.log(displayedAnswers);

		}
		// console.log(questions[0]);
		// make question appear on screen -- don't forget to remove old one
			// (jQuery)
		const $displayedQuestion = $('#displayed-question')
		$displayedQuestion.attr('id', 'displayed-question')	
		$displayedQuestion.text(`question: ${displayedQuestion.text}`);
		// put it used questions array
		this.usedQuestions.push(displayedQuestion);
		console.log(this.usedQuestions);


	},

	checkCorrect: function() {
		// this will need access to the clicked button
		// see if the clicked element is "correct"
	}

}

game.start()
// User sees screen with "Start Game" button,
// click on that and get sent to next screen
// user will see all of the levels of the game next

// first question will appear as the levels go away.
// Maybe use a timer to go to the question?
// User will select answer they believe is correct,
// Each question will need an if statement to remove 
// 2 of the wrong answers due to the nature of the game and
// the 50/50 lifeline.
// "Phone a friend" and "Ask the audience" will have
// buttons that work, but they will automatically 
// select the correct answer.
// Each lifeline can only be used once! 
// Questions will become increasingly more difficult
// Set timer for each question?


// If user answers correctly, make button red
// If user answers wrong, make button selected red
// SHOW GRITTY IF INCORRECT
// If correct answer is selected, proceed to show
// user the next amount they will play for
// give option to keep playing or quit the game.
// If keep playing, proceed to next question
// If quit the game, show another picture of GRITTY 
// on the game over screen
// User keeps going if they keep answering correctly 
// and decide to keep playing
// If get all questions right, show Congratulations
// along with a DIFFERENT happier mascot

// if statement will be needed for each question if any of 
// the three incorrect answers are chosen
// use dancing gritty gif on red background with 
// GAME OVER and give option to play again from 
// from the beginning.

// if statement will also need to be created for each 
// "Quit Game" button on the "Correct Answer" screen
// So that the user can all the way back to the start
// of the game. 

// if statement will be needed for the 
// "Continue" button on the "Correct Answer"
// screen as well to pull up the next question

$('#start').on('click', (event) => {
	console.log('Button Works');
});
$('#answer-1').on('click', (event) => {
	console.log('This is totally right!');	
});
$('#answer-1').on('click', (event) => {
	$("#answer-1").css("color", "green");
});
$('#answer-2').on('click', (event) => {
	console.log('Sorry, this is wrong!');
});
$('#answer-2').on('click', (event) => {
	$("#answer-2").css("color", "red");
});
$('#answer-3').on('click', (event) => {
	console.log('Sorry, this is wrong!');
});
$('#answer-3').on('click', (event) => {
	$("#answer-3").css("color", "red");
});
$('#answer-4').on('click', (event) => {
	console.log(event);
	// currentTarget is a property on the event object -- this is the HTML element listener was attached to
	console.log(event.currentTarget); 

	game.checkCorrect()	
	console.log('Sorry, this is wrong!');
});
$('#answer-4').on('click', (event) => {
	$("#answer-4").css("color", "red");
});			
$('#next-question').on('click', (event) => {
	console.log('Pulling next question');
});

const me = {
	name: "Ken",
	greet: function() {
		console.log("hi");
	}
}

console.log(me.name); // me is the object, name is the property(k-v pair) on the object
me.greet()

// 1. nextQuestion should remove old one, show next one

// 2. modify so that buttons "know" which answer is correct 

// 3. finish checkCorrect() -- complex -- ask question

// 4. modify nextQuestion to remove the "correctness" info from previous question from the button

// 5. randomize answers -- modify nextQuestion