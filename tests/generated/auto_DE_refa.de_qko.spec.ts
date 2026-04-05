import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_refa.de_qko', ['https://refa.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
