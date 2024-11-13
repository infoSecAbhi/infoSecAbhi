document.addEventListener('DOMContentLoaded', () => {
    // Simple router
    const router = () => {
        const path = window.location.pathname;
        const root = document.getElementById('root');
        
        // Load appropriate page content based on URL
        switch(path) {
            case '/':
                loadPage('/pages/Home.html');
                break;
            case '/solutions':
                loadPage('/pages/Solutions.html');
                break;
            case '/docs':
                loadPage('/pages/Documentation.html');
                break;
            case '/about':
                loadPage('/pages/About.html');
                break;
            case '/contact':
                loadPage('/pages/Contact.html');
                break;
            default:
                loadPage('/pages/404.html');
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