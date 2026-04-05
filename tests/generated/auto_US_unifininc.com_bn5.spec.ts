import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_unifininc.com_bn5', ['https://unifininc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
