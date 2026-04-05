import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_orlis.difu.de_cpq', ['https://orlis.difu.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
