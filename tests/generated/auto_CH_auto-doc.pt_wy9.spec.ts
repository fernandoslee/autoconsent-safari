import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_auto-doc.pt_wy9', ['https://www.auto-doc.pt/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
