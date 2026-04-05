import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_woelfel.de_rcu', ['https://www.woelfel.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
