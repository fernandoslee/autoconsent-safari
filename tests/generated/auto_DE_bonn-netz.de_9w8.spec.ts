import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bonn-netz.de_9w8', ['https://www.bonn-netz.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
