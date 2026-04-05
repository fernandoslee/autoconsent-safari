import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_seramis.com_mz9', ['https://www.seramis.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
