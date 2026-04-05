import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_matchafuel.com_0eg', ['https://matchafuel.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
