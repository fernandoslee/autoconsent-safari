import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bloomling.de_5ub', ['https://www.bloomling.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
