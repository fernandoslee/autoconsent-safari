import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_aoc.com_dib', ['https://www.aoc.com/ch'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
