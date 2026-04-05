import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rogx.de_y9s', ['https://rogx.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
