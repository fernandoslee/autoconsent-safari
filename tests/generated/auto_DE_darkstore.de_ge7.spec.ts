import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_darkstore.de_ge7', ['https://www.darkstore.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
