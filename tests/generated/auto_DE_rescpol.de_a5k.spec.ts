import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rescpol.de_a5k', ['https://www.rescpol.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
