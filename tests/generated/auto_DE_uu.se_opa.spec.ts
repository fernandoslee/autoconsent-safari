import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_uu.se_opa', ['https://www.uu.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
