import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kiweb.de_5lf', ['https://www.kiweb.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
