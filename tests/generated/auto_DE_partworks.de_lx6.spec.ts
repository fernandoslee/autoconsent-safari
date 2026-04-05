import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_partworks.de_lx6', ['https://partworks.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
