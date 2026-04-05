import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_new-netz.de_n0s', ['https://www.new-netz.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
