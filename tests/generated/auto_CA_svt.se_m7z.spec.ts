import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_svt.se_m7z', ['https://www.svt.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
