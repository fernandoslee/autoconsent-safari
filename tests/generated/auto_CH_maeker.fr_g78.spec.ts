import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_maeker.fr_g78', ['https://maeker.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
