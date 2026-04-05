import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_plotivy.app_8wc', ['https://plotivy.app/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
