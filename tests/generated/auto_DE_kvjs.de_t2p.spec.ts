import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kvjs.de_t2p', ['https://www.kvjs.de/startseite'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
