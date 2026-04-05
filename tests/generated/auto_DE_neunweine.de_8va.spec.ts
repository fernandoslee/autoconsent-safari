import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_neunweine.de_8va', ['https://www.neunweine.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
