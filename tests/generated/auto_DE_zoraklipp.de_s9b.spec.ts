import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_zoraklipp.de_s9b', ['https://www.zoraklipp.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
