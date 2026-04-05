import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_mathem.se_ti8', ['https://www.mathem.se/se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
