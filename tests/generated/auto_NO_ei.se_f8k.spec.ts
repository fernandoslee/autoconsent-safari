import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ei.se_f8k', ['https://ei.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
