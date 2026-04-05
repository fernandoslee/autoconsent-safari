import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_holzprofi.com_k9r', ['https://holzprofi.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
