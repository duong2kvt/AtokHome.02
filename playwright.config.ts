import {defineConfig,devices} from '@playwright/test';
export default defineConfig({testDir:'./tests/browser',timeout:60000,retries:0,use:{...devices['iPhone 13'],browserName:'chromium',baseURL:'http://127.0.0.1:4173/AtokHome.02/',trace:'retain-on-failure'},webServer:{command:'npm run preview -- --host 127.0.0.1 --port 4173',url:'http://127.0.0.1:4173/AtokHome.02/',reuseExistingServer:false}});
