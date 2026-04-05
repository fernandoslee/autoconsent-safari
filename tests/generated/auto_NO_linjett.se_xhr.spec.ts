import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_linjett.se_xhr', ['https://www.linjett.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
