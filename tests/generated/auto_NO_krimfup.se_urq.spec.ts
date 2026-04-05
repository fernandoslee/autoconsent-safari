import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_krimfup.se_urq', ['https://www.krimfup.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
