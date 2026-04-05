import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wallism.com_hxy', ['https://wallism.com/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
