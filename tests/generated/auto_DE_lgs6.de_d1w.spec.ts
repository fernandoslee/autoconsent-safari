import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lgs6.de_d1w', ['https://lgs6.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
