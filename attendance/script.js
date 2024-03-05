document.getElementById('attendanceForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const studentName = document.getElementById('studentName').value;
  const attendanceStatus = document.getElementById('attendanceStatus').value;

  const attendanceOutput = document.getElementById('attendanceOutput');
  attendanceOutput.innerHTML += `
    <p><strong>Student Name:</strong> ${studentName}</p>
    <p><strong>Attendance Status:</strong> ${attendanceStatus}</p>
    <hr>
  `;

  // You can add further functionality like storing attendance data in a database here
});
