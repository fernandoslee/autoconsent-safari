import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mcboard.ch_8ip', ['https://www.mcboard.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
