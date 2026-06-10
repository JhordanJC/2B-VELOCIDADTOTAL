export function homeView() {
    return `
        <section class="hero">
            <div class="hero-content">
                <span class="tag">Estandar de Excelencia mundial</span>
                <h2>Definiendo la Velocidad Total</h2>
                <p>
                    Descubre una coleccion exclusiva de vehiculos modernos,
                    deportivos y electricos seleccionados para una experiencia superior.
                </p>

                <div class="hero-actions">
                    <a href="#catalogo" class="btn primary">Explorar catalogo</a>
                    <a href="#login" class="btn secondary">Iniciar sesion</a>
                </div>
            </div>

            <div class="hero-card">
                <img 
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80" 
                    alt="Carro deportivo"
                >
            </div>
        </section>

        <section class="features">
            <h2>Servicios Exclusivos</h2>

            <div class="features-grid">
                <article>
                    <h3>Modelos Nuevos</h3>
                    <p>Vehiculos recientes con tecnologia moderna y alto rendimiento.</p>
                </article>

                <article>
                    <h3>Ofertas Exclusivas</h3>
                    <p>Opciones seleccionadas para clientes que buscan calidad premium.</p>
                </article>

                <article>
                    <h3>Certificados Premium</h3>
                    <p>Informacion clara sobre cada vehiculo disponible en el catalogo.</p>
                </article>
            </div>
        </section>

        <footer class="footer">
            <p>Velocidad Total - Catalogo de autos premium</p>
        </footer>
    `;
}