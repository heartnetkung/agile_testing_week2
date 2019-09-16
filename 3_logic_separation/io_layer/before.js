var calculateGrade = async function() {
	var session = await getSession();
	if(session.isLoggedIn)
		throw new Error('not logged in');

	var data = await query('SELECT * FROM blah blah');
	var data2 = await query('SELECT * FROM blah blah');
	//the rest of logic here
}
