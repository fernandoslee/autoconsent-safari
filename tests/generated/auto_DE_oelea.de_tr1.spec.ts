import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_oelea.de_tr1', ['https://www.oelea.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
