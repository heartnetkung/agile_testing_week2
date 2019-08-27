const fs = require('fs');


const OUTPUT_FILE = 'doc.md'
var output = '';


const recursivelyReport = function(prevTitle, testResults, resultsIndex, titlesIndex) {
	var testResult = testResults[resultsIndex];

	//end
	if (!testResult)
		return;

	const { ancestorTitles, title } = testResult;
	const currentTitle = ancestorTitles[titlesIndex];

	//continue
	if (!currentTitle)
		return recursivelyReport(prevTitle, testResults, resultsIndex, --titlesIndex);

	//write describe
	if (prevTitle !== currentTitle && titlesIndex < ancestorTitles.length) {
		output += getIndent(titlesIndex) + currentTitle + '\n';
		return recursivelyReport(currentTitle, testResults, resultsIndex, ++titlesIndex);
	}

	//write it
	output += getIndent(titlesIndex) + ' - ' + title + '\n';
	recursivelyReport(currentTitle, testResults, ++resultsIndex, titlesIndex);
}


const getIndent = function(count) {
	return '                               '.substring(0, count * 2);
};


class MakeDocReporter {

	onRunComplete(foo, results) {
		results.testResults.forEach(({ testFilePath, testResults, failureMessage }) => {
			recursivelyReport(testFilePath, testResults, 0, 0);
		});
		fs.writeFileSync(OUTPUT_FILE, output);
	}
}


module.exports = MakeDocReporter;
