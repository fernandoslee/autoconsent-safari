import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kopp-umwelt.de_9u9', ['https://kopp-umwelt.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
