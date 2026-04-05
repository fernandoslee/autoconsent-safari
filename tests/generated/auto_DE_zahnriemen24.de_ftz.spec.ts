import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_zahnriemen24.de_ftz', ['https://www.z24.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
