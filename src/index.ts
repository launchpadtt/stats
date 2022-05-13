import { MatchReader } from './MatchReader';
// import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
// import { HTMLReport } from './reportTargets/HTMLReport';

console.log('Hi there');

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv')

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const matchReader2 = MatchReader.fromCsv('football.csv');
matchReader2.load();

const summary = new Summary(
    new WinsAnalysis('Man United'), 
    new ConsoleReport());

summary.buildAndPrintReport(matchReader.matches);

const summary2 = Summary.winsAnalysisWithHTMLReport('Man United'); 

summary2.buildAndPrintReport(matchReader.matches);
// const matches = fs.readFileSync('football.csv', {
//     encoding: 'utf-8'
// }).split('\n').map((row: string): string[] => {
//     return row.split(',');
// });

// const reader = new MatchReader('football.csv');
// reader.read();
// const dateOfFirstMatch = reader.data[0][0];
// console.log(matches);
// console.log(reader.data);

// let manUnitedWins = 0;

// // for (let match of reader.data) {
// for (let match of matchReader.matches) {
//         if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//         manUnitedWins++;
//     } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
//         manUnitedWins++;
//     }
// }

// console.log(`Man United won ${manUnitedWins} games`);