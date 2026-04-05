import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_sarabackmo.se_ehm', ['https://sarabackmo.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
