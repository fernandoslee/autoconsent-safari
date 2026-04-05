import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_kb.se_wxn', ['https://www.kb.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
