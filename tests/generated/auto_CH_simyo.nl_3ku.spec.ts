import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_simyo.nl_3ku', ['https://www.simyo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
