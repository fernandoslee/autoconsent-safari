import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kerker24.de_b3m', ['https://kerker24.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
