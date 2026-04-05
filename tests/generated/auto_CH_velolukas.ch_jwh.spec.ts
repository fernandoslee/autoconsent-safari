import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_velolukas.ch_jwh', ['https://www.velolukas.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
