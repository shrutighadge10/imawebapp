// Assuming you have an API endpoint that returns user details
fetch('/api/userDetails')
    .then(response => response.json())
    .then(data => {
        document.querySelector('.footer-left').textContent = `Department: ${data.department}`;
        document.querySelector('.footer-right').textContent = `Welcome, ${data.employeename}`;
        document.querySelector('.avatar span').textContent = `${data.employeename.charAt(0)}`;
    })
    .catch(error => console.error('Error fetching user details:', error));
