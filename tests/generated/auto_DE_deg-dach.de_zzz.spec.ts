import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_deg-dach.de_zzz', ['https://www.deg-dach.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
