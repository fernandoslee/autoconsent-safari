import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_magazin.com_o3c', ['https://www.magazin.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
