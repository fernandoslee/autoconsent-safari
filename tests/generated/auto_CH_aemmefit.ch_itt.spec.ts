import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_aemmefit.ch_itt', ['https://www.aemmefit.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
