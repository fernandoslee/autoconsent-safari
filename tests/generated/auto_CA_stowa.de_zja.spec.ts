import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_stowa.de_zja', ['https://www.stowa.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
