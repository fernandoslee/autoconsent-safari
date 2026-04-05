import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ale-hop.org_vfd', ['https://www.ale-hop.org/es'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
