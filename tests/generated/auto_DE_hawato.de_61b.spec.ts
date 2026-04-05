import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hawato.de_61b', ['https://hawato.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
