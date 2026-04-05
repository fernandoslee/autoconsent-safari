import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aquatoll.de_uuk', ['https://aquatoll.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
