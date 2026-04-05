import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_geero.de_ztz', ['https://www.geero.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
