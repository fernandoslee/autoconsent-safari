import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ef-tech.de_i8n', ['https://www.ef-tech.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
