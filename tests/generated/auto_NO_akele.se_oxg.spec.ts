import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_akele.se_oxg', ['https://www.akele.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
