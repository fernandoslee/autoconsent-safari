import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_arpmuseum.org_7s5', ['https://arpmuseum.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
