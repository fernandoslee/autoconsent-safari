import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_stylefetish.de_1f7', ['https://stylefetish.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
