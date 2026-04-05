import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_hartem.com_s7g', ['https://hartem.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
