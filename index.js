const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const Employee = require('./lib/employee')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');