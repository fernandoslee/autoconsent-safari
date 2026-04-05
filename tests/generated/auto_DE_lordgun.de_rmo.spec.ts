import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lordgun.de_rmo', ['https://www.lordgun.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
