import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dkriesel.com_tsf', ['https://www.dkriesel.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
