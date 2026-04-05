import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_romberg.de_t0n', ['https://www.romberg.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
