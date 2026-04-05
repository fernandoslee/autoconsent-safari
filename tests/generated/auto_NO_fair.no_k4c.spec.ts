import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fair.no_k4c', ['https://www.fair.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
