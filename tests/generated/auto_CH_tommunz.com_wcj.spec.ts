import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tommunz.com_wcj', ['https://www.tommunz.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
