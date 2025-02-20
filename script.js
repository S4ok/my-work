

function validateForm(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let isValid = true;

    // التحقق من صحة البريد الإلكتروني
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'البريد الإلكتروني غير صالح';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // التحقق من كلمة المرور
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    if (isValid) {
        // هنا يمكنك إضافة منطق تسجيل الدخول الفعلي
        alert('تم التحقق بنجاح! جاري التوجيه...');
        window.location.href = 'dashboard.html';
    }

    return false;
}

function showForgotPassword() {
    alert('الرجاء الاتصال بالدعم الفني لإعادة تعيين كلمة المرور');
}

function showSignup() {
    alert('سيتم توجيهك إلى صفحة إنشاء حساب جديد');
    // window.location.href = 'signup.html';
}
