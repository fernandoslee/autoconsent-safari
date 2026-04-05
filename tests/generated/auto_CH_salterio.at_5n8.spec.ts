import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_salterio.at_5n8', ['https://www.salterio.at/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
