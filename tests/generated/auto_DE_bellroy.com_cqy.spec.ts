import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bellroy.com_cqy', ['https://bellroy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
