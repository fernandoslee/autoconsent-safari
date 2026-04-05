import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_florence.de_uy1', ['https://www.florence.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
