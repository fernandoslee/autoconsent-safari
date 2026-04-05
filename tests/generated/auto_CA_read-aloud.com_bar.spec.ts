import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_read-aloud.com_bar', ['https://read-aloud.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
