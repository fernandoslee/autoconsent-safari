import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_just-sound.de_g75', ['https://just-sound.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
