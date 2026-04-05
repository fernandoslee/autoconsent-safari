import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ari-motors.com_2s1', ['https://ari-motors.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
