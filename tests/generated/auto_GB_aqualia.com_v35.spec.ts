import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_aqualia.com_v35', ['https://www.aqualia.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
