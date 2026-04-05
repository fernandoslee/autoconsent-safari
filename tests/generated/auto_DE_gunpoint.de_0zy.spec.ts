import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gunpoint.de_0zy', ['https://www.gunpoint.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
