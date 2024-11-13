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
            default:
                loadPage('/src/pages/404.html');
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