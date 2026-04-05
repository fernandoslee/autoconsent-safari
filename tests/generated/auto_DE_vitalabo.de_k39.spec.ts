import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vitalabo.de_k39', ['https://www.vitalabo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
