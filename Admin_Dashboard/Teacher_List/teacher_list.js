function count_user_id(json_obj) {
  let count = 0;
  Object.entries(json_obj).forEach((entry) => {
    count++;
  })
  return count;
}

let num_of_teacher = count_user_id(JSON.parse(sessionStorage.getItem('teacher')));
let report = document.getElementById('report');
report.textContent = `There are total ${num_of_teacher} teacher(s) in our system.`;
let tbl = document.getElementById('info-table');
let count = 0;

let res = JSON.parse(sessionStorage.getItem('teacher'));

Object.entries(res).forEach((entry) => {
  count++;
  const row = document.createElement('tr');

  const cell1 = document.createElement("td");
  const cell1Text = document.createTextNode(`${count}`);
  cell1.appendChild(cell1Text);
  row.appendChild(cell1);

  const [key, value] = entry;
  // entry[0] is user_id
  // entry[1] is a JSON, which contain birthday, firstname, lastname
  const cell_2 = document.createElement('td');
  const cell_2_text = document.createTextNode(entry[0]);
  cell_2.appendChild(cell_2_text);
  const cell_3 = document.createElement('td');
  const cell_3_text = document.createTextNode(entry[1].firstname);
  cell_3.appendChild(cell_3_text);
  const cell_4 = document.createElement('td');
  const cell_4_text = document.createTextNode(entry[1].lastname);
  cell_4.appendChild(cell_4_text);
  const cell_5 = document.createElement('td');
  const cell_5_text = document.createTextNode(entry[1].birthday);
  cell_5.appendChild(cell_5_text);
  row.appendChild(cell_2);
  row.appendChild(cell_3);
  row.appendChild(cell_4);
  row.appendChild(cell_5);

  tbl.appendChild(row); 
});

// for (let i = 0; i < num_of_student; i++) {
//   const row = document.createElement('tr');

  
// }