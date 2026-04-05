import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_tyg.se_5gr', ['https://www.tyg.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
