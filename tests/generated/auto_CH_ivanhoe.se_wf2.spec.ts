import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ivanhoe.se_wf2', ['https://www.ivanhoe.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
