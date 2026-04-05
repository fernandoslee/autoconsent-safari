import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bdsf.de_wpg', ['https://www.bdsf.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
