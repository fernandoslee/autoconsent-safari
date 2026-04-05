import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_salzgeber.de_fn8', ['https://salzgeber.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
