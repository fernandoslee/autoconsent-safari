import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_aalhytta.no_uc7', ['https://www.aalhytta.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
