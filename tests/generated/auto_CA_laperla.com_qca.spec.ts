import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_laperla.com_qca', ['https://laperla.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
