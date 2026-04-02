import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_erento.com_r82', ['https://www.erento.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
