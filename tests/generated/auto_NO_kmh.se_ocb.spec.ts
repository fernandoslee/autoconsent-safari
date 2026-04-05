import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_kmh.se_ocb', ['https://www.kmh.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
