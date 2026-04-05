import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_keuco.com_v5r', ['https://www.keuco.com/de_de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
