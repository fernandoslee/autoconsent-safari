import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_meinklang.at_vwr', ['https://meinklang.at/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
