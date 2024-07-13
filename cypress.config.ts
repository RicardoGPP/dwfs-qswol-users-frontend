import { defineConfig } from "cypress";
import axios from "axios";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on('task', {
                async 'db:erase'() {
                    const { data } = await axios.delete('http://localhost:3000/users');
                    return data;
                },
                async 'db:create'(user) {
                    const { data } = await axios.post('http://localhost:3000/users', user);
                    return data;
                }
            });
        }
    }
});