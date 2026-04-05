import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tyboat.com_wf3', ['https://www.tyboat.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
