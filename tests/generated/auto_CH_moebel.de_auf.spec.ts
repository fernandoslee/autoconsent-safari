import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_moebel.de_auf', ['https://www.moebel.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
