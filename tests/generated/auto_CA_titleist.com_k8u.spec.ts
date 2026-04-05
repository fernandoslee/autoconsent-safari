import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_titleist.com_k8u', ['https://www.titleist.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
