import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_kb.isc.org_ddu', ['https://kb.isc.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
