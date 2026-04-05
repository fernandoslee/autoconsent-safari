import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ooe.lko.at_f8i', ['https://ooe.lko.at/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
