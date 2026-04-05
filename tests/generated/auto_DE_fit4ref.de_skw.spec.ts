import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fit4ref.de_skw', ['https://www.fit4ref.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
