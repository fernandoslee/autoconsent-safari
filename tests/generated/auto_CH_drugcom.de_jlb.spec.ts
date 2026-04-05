import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_drugcom.de_jlb', ['https://www.drugcom.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
