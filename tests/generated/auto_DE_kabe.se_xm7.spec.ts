import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kabe.se_xm7', ['https://www.kabe.se/se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
