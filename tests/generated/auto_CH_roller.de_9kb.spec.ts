import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_roller.de_9kb', ['https://www.roller.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
