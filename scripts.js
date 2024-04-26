const { spawn } = require('child_process');

function predictDisease(scriptPath, args) {
  const pyProg = spawn('python', [scriptPath].concat(args));
  // Collect data from script and print to console
     let data = '';
  pyProg.stdout.on('data', (stdout) => {
  data += stdout.toString();
  });
  pyProg.stderr.on('data', (stderr) => {
  console.log('stderr: ${stderr}');
  });
  pyProg.on('close', (code) => {
  console.log('child process exited with code ${code}');
   console.log(data);
  });
}
predictDisease('C:\Users\HP\Desktop\minor_project\model.py', []);


// function predictDisease() {
//   const diseaseCode = document.getElementById('diseaseCode').value;
//   const url = `http://127.0.0.1:5000/api/disease/${diseaseCode}`;


//   fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       // Display the result
//       console.log(data);
//       document.getElementById('result').innerHTML = `<p>Disease: ${data.disease}</p><p>Precautions: ${data.precaution}</p>`;
//     })
//     .catch(error => {
//       // Handle errors
//       console.error('Error:', error);
//     });
// }





