// Módulo Principal (Estado e Navegação)
const app = {
    init: () => {
        // Renderiza os cards ao carregar
        ui.renderSubjects(appData.subjects);
    },

    navigate: (screenId) => {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => {
            screen.classList.remove('active');
            setTimeout(() => {
                if (!screen.classList.contains('active')) {
                    screen.classList.add('hidden');
                }
            }, 300); 
        });

        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.remove('hidden');
            void targetScreen.offsetWidth; // Force reflow
            targetScreen.classList.add('active');
        }

        // Limpa o iframe ao sair da tela de simulação
        if (screenId !== 'simulator-screen') {
            const iframe = document.getElementById('simulator-webview');
            if (iframe) iframe.src = '';
        }
    },

    openSimulator: (subjectId) => {
        const subject = appData.subjects.find(s => s.id === subjectId);
        if (!subject) return;

        const iframe = document.getElementById('simulator-webview');
        if (iframe) {
            iframe.src = subject.url;
            ui.updateSimulatorTitle(subject.title);
            app.navigate('simulator-screen');
        }
    }
};

// Inicializa a aplicação
document.addEventListener('DOMContentLoaded', app.init);
