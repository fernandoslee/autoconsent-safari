import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_secunet.com_vdy', ['https://www.secunet.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
