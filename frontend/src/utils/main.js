document.addEventListener('DOMContentLoaded', () => {
    // Simple router
    const router = () => {
        const path = window.location.pathname;
        const root = document.getElementById('root');
        
        // Load appropriate page content based on URL
        switch(path) {
            case '/':
                loadPage('/src/pages/Home.html');
                break;
            case '/solutions':
                loadPage('/src/pages/Solutions.html');
                break;
            case '/docs':
                loadPage('/src/pages/Documentation.html');
                break;
            case '/about':
                loadPage('/src/pages/About.html');
                break;
            case '/contact':
                loadPage('/src/pages/Contact.html');
                break;
            case '/solutions/endpoint-protection':
                loadPage('/src/pages/solutions/EndpointProtection.html');
                break;
            case '/solutions/cloud-security':
                loadPage('/src/pages/solutions/CloudSecurity.html');
                break;
            case '/services/risk-assessment':
                loadPage('/src/pages/services/RiskAssessment.html');
                break;
            case '/services/compliance':
                loadPage('/src/pages/services/Compliance.html');
                break;
            case '/services/control-testing':
                loadPage('/src/pages/services/ControlTesting.html');
                break;
        }
    };

    // Function to load page content
    const loadPage = async (pagePath) => {
        try {
            const response = await fetch(pagePath);
            const content = await response.text();
            document.getElementById('root').innerHTML = content;
        } catch (error) {
            console.error('Error loading page:', error);
        }
    };

    // Initial route
    router();

    // Handle browser back/forward buttons
    window.addEventListener('popstate', router);
}); 