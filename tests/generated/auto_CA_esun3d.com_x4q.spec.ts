import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_esun3d.com_x4q', ['https://www.esun3d.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
