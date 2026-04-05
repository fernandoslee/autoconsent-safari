import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_electronicx.de_4qd', ['https://electronicx.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
