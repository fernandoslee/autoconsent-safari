import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_wien.gv.at_4xi', ['https://www.wien.gv.at/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
