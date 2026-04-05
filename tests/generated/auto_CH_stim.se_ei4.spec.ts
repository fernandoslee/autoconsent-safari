import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_stim.se_ei4', ['https://www.stim.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
