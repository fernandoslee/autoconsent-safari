import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_daad.de_l0t', ['https://www.daad.de/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
