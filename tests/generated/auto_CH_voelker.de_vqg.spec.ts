import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_voelker.de_vqg', ['https://www.voelker.de/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
