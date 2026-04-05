import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_labu24.de_fpy', ['https://www.labu24.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
