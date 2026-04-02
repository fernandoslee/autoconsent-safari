import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fair.no_704', ['https://www.fair.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
