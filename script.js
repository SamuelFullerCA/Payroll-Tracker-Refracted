// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {

  //creates the array of employees
  let employeearray = [];
 

  //main loop for funtion
  while (true) {
    let first, last, sal;
  
    //gets the employees first name
    do {
      first = prompt("Enter employee's first name")
      break;
    } while(first === null)

    //gets the employees last name
    do {
      last = prompt("Enter employee's last name")
      break;
    } while(first === null)

    //need to fix
    //gets the employees salary
    do {
      sal = prompt("Enter employee's salary")
        if (isNaN(sal)){
          alert("Not a number");
        } else {
          break;
        }
    }while(isNaN(sal))

    // creates and object for the employee
    const employee = {
      firstName: first,
      lastName: last,
      salary: sal
    }

  // adds the above employee object to the employee array
  employeearray.push(employee)

  //gives the option to add more employees
  if (confirm("Do you want to add another employee?")){
    }else {
      break;
    }
  }


    return employeearray;
}

 
  // TODO: Get user input to create and return an array of employee objects


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
