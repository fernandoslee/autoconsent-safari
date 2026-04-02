import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_lovable.dev_3v4', ['https://lovable.dev/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
