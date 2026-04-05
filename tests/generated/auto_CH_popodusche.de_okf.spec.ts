import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_popodusche.de_okf', ['https://popodusche.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
