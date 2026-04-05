import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cotonea.de_m3d', ['https://www.cotonea.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
