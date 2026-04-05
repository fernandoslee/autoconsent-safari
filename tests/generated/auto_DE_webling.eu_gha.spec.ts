import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_webling.eu_gha', ['https://www.webling.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
