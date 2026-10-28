// Using forEach()

const departments = ['Design', 'Engineering', 'Support'];

departments.forEach((department) => {
  console.log(department);
});

departments.forEach((department, index) => {
  console.log(index, department);
  console.log(`${index + 1}. ${department}`);
});
