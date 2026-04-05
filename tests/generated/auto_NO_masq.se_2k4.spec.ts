import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_masq.se_2k4', ['https://masq.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
