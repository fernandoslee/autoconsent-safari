import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_adhdmedisin.no_0qy', ['https://adhdmedisin.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
