import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_earpros.com_3s3', ['https://www.earpros.com/ca'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
