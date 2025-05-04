document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // منع الإرسال التقليدي للنموذج
  
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // تحقق إذا كانت الحقول غير فارغة
    if (email !== "" && password !== "") {
      // تخزين البريد الإلكتروني وكلمة المرور في localStorage
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
  
      // إعادة توجيه المستخدم إلى الصفحة الرئيسية (index.html)
      window.location.href = "index.html";
    } else {
      alert("Please enter both email and password");
    }
  });
  