import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_djv-nrw.de_kji', ['https://www.djv-nrw.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
