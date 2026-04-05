import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_katysbcn.com_bw4', ['https://www.katysbcn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
