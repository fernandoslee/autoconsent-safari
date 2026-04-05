import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_riess.at_its', ['https://www.riess.at/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
