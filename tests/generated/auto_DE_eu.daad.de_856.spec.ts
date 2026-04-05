import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eu.daad.de_856', ['https://eu.daad.de/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
