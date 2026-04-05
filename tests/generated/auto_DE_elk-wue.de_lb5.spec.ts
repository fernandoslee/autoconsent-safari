import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_elk-wue.de_lb5', ['https://www.elk-wue.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
