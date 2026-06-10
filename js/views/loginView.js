export function loginView() {
    return `
        <section class="login-page">
            <div class="login-card">
                <h2>Iniciar sesion</h2>
                <p>Accede para guardar tus preferencias del catalogo.</p>

                <form id="loginForm">
                    <label for="email">Correo electronico</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="correo@ejemplo.com"
                        required
                    >

                    <label for="password">Contrasena</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Minimo 6 caracteres"
                        required
                    >

                    <button type="submit">Ingresar</button>
                </form>

                <p id="loginMessage"></p>
            </div>
        </section>
    `;
}

export function initLoginView() {
    const form = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const message = document.getElementById("loginMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (password.length < 6) {
            message.textContent = "La contraseña debe tener minimo 6 caracteres.";
            return;
        }

        const user = {
            email: email,
            logged: true
        };

        localStorage.setItem("userSession", JSON.stringify(user));

        message.textContent = "Sesion iniciada correctamente.";

        setTimeout(function () {
            window.location.hash = "#catalogo";
        }, 800);
    });
}