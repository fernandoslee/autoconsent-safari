import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_solar24.de_cus', ['https://www.solar24.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
