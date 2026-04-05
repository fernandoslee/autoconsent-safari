import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_vasteras.se_0fg', ['https://www.vasteras.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
