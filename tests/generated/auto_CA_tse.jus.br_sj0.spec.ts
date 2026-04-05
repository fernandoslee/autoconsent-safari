import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_tse.jus.br_sj0', ['https://www.tse.jus.br/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
