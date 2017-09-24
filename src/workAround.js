// Why it doesn't work?
// import Employee from './employee';
// Employee = require('./employee');

import {Employee, cadre, tax, benifits, bonus, reimbursement} from 'employee';
// I got:
// SyntaxError: Unexpected token import
//     at createScript (vm.js:56:10)
//     at Object.runInThisContext (vm.js:97:10)
//     at Module._compile (module.js:542:28)
//     at Object.Module._extensions..js (module.js:579:10)
//     at Module.load (module.js:487:32)
//     at tryModuleLoad (module.js:446:12)
//     at Function.Module._load (module.js:438:3)
//     at Module.runMain (module.js:604:10)
//     at run (bootstrap_node.js:389:7)
//     at startup (bootstrap_node.js:149:9)

function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + cadre());
  console.log('Tax: ' + tax());
  console.log('Benefits: ' + benifits());
  console.log('Bonus: ' + bonus());
  console.log('Reimbursement Eligibility: ' + reimbursement() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);
