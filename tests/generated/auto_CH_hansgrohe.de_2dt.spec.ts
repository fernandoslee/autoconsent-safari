import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hansgrohe.de_2dt', ['https://www.hansgrohe.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
