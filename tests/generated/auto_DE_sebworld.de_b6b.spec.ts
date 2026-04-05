import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sebworld.de_b6b', ['https://www.sebworld.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
