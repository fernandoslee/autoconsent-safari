import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kreis-tir.de_orz', ['https://www.kreis-tir.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
