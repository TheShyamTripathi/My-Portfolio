document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault(); 
        var name = document.getElementById("nameInput").value.trim();
        var email = document.getElementById("emailInput").value.trim();
        var subject = document.getElementById("subjectInput").value.trim();
        var message = document.getElementById("messageInput").value.trim();

    
        function isValidName(name) {
            return /^[a-zA-Z_\s]+$/.test(name); 
        }

        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 
        }

        
        if (!isValidName(name)) {
            alert("Please enter a valid name (only letters, underscores, and spaces allowed).");
            return;
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        var data = "Name: " + name + "\nEmail: " + email + "\nSubject: " + subject + "\nMessage: " + message;
        saveToFile(data);
    });

    function saveToFile(data) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "form_data.php", true); 
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("data=" + encodeURIComponent(data));
    }
});
