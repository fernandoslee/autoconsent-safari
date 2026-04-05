import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_doctorio.io_pfj', ['https://doctorio.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
