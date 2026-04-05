import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pilzbrut.de_h6f', ['https://www.pilzbrut.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
