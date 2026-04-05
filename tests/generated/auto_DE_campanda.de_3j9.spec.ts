import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_campanda.de_3j9', ['https://www.campanda.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
