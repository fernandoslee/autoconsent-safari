import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_habasit.com_lqh', ['https://www.habasit.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
