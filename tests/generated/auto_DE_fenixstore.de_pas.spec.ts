import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fenixstore.de_pas', ['https://fenixstore.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
