import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_solarfy.de_otg', ['https://www.solarfy.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
