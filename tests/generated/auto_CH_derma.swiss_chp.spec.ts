import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_derma.swiss_chp', ['https://www.derma.swiss/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
