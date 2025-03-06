
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const main = document.getElementById('main');

        signUpButton.addEventListener("click", () => {
            main.classList.add('right-panel-active');
        });

        signInButton.addEventListener("click", () => {
            main.classList.remove('right-panel-active');
        });

        document.getElementById("signUpForm").addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = {
                name: document.getElementById("signup-name").value,
                email: document.getElementById("signup-email").value,
                password: document.getElementById("signup-password").value
            };
            localStorage.setItem("signUpData", JSON.stringify(formData));
            alert("Sign-up successful! You can now log in.");
            document.getElementById("signUpForm").reset();
        });

        document.getElementById("signInForm").addEventListener("submit", function (e) {
            e.preventDefault();
            
            const signInEmail = document.getElementById("signin-email").value;
            const signInPassword = document.getElementById("signin-password").value;
            
            const storedData = JSON.parse(localStorage.getItem("signUpData"));

            if (storedData && storedData.email === signInEmail && storedData.password === signInPassword) {
                alert("Login successful! Welcome, " + storedData.name);
                document.getElementById("signInForm").reset();
            } else {
                alert("Invalid email or password. Please try again.");
                document.getElementById("signInForm").reset();
            }
        });