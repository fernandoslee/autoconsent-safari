import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ssv-jahn.de_k93', ['https://www.ssv-jahn.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
