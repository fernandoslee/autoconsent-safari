import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_airchina.de_6ra', ['https://www.airchina.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
