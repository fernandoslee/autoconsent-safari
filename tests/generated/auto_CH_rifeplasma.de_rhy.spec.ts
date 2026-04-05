import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_rifeplasma.de_rhy', ['https://rifeplasma.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
