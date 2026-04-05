import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mrluck.com_o6b', ['https://www.mrluck.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
