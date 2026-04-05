import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dnqp.de_te2', ['https://www.dnqp.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
