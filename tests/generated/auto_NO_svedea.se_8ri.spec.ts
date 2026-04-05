import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_svedea.se_8ri', ['https://www.svedea.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
