import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_oldcameras.nl_iri', ['https://oldcameras.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
