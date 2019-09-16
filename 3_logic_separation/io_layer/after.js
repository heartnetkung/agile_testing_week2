var calculateGradeLogic = async function(data, data2) {
	//the rest of logic here
};

var calculateGradeController = async function() {
	//or use middleware for express.js
	var session = await getSession();
	if (session.isLoggedIn)
		throw new Error('not logged in');

	var { data, data2 } = await calculateGradeModel();
	calculateGradeLogic(data, data2);
};

var calculateGradeModel = async function() {
	var data = await query('SELECT * FROM blah blah');
	var data2 = await query('SELECT * FROM blah blah');
	return { data, data2 };
};
