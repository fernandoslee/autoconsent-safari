import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_bdsm-angel.cz_7qz', ['https://bdsm-angel.cz/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
