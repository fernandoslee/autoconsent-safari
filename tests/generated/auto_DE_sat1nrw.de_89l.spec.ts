import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sat1nrw.de_89l', ['https://sat1nrw.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
