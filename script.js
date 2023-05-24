document.getElementById("adminBtn").addEventListener("click", function() {
    window.location.href = "login_admin.html";
});

document.getElementById("guestBtn").addEventListener("click", function() {
    window.location.href = "login_guest.html";
});
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 기본 제출 동작 방지

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        window.location.href = "admin.html";
    } else {
        alert("Invalid username or password.");
    }
});



