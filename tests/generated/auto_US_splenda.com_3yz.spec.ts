import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_splenda.com_3yz', ['https://www.splenda.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
