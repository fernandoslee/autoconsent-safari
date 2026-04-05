import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_probrake.de_su7', ['https://www.probrake.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
