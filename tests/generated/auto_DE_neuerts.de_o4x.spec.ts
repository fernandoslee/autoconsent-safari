import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_neuerts.de_o4x', ['https://www.neuerts.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
