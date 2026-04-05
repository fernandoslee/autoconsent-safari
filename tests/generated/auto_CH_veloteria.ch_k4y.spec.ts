import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_veloteria.ch_k4y', ['https://www.veloteria.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
