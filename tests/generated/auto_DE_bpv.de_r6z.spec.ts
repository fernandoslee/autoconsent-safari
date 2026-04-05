import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bpv.de_r6z', ['https://bpv.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
