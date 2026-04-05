import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schlauch24.de_6z8', ['https://schlauch24.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
