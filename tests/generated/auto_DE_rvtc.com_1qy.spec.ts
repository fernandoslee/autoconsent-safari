import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rvtc.com_1qy', ['https://rvtc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
