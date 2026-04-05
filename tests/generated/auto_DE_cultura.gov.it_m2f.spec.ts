import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cultura.gov.it_m2f', ['https://cultura.gov.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
