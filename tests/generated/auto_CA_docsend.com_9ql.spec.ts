import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_docsend.com_9ql', ['https://www.docsend.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
