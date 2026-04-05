import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bancobpm.it_oll', ['https://www.bancobpm.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
