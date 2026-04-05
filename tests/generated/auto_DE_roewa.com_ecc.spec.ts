import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_roewa.com_ecc', ['https://roewa.com/en/home'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
