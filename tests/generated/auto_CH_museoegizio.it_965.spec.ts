import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_museoegizio.it_965', ['https://museoegizio.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
