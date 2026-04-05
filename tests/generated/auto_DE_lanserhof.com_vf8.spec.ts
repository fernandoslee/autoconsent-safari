import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lanserhof.com_vf8', ['https://lanserhof.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
