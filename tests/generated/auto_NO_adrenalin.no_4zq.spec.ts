import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_adrenalin.no_4zq', ['https://www.adrenalin.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
