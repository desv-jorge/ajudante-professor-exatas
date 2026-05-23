// Módulo de UI (Renderização de Componentes)
const ui = {
    renderSubjects: (subjects) => {
        const container = document.getElementById('subjects-container');
        if (!container) return;

        container.innerHTML = subjects.map(subject => `
            <article class="subject-card">
                <div class="card-img">
                    <img src="${subject.image}" alt="${subject.title}">
                </div>
                <div class="card-info">
                    <h3>${subject.title}</h3>
                    <p>${subject.description}</p>
                </div>
                <button class="btn btn-action ${subject.theme}" onclick="app.openSimulator('${subject.id}')">
                    Acessar
                </button>
            </article>
        `).join('');
    },

    updateSimulatorTitle: (title) => {
        const titleEl = document.getElementById('simulator-title');
        if (titleEl) titleEl.textContent = `Simulador de ${title}`;
    }
};
