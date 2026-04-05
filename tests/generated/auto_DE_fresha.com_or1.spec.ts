import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fresha.com_or1', ['https://www.fresha.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
