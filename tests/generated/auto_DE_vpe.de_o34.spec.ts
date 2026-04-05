import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vpe.de_o34', ['https://vpe.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
