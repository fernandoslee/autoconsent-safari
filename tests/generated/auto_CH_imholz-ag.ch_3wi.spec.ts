import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_imholz-ag.ch_3wi', ['https://www.imholz-ag.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
