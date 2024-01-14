import { defineConfig } from 'cypress';

export default defineConfig({
    video: true,
    e2e: {
        baseUrl: 'https://wamboo-demo.online',
        setupNodeEvents(on, config) {
            on('task', {
                log(message) {
                    console.log(message);
                    return null;
                },
            });
        },
    },
});
