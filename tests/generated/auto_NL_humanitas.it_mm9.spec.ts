import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_humanitas.it_mm9', ['https://www.humanitas.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
