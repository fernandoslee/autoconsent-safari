import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_nothing.tech_bk3', ['https://nothing.tech/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
