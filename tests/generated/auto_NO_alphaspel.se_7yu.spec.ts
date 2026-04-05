import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_alphaspel.se_7yu', ['https://alphaspel.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
