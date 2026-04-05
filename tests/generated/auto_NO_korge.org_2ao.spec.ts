import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_korge.org_2ao', ['https://korge.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
