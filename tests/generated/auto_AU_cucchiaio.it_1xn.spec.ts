import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cucchiaio.it_1xn', ['https://www.cucchiaio.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
