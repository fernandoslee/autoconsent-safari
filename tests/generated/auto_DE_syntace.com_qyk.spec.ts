import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_syntace.com_qyk', ['https://www.syntace.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
