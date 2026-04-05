import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_18plus.de_1ml', ['https://www.18plus.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
