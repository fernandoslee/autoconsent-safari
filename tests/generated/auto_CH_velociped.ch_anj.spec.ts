import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_velociped.ch_anj', ['https://www.velociped.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
