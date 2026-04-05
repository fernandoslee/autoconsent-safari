import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_getquin.com_4gd', ['https://www.getquin.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
