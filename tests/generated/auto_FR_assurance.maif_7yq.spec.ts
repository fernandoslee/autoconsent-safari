import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_assurance.maif_7yq', ['http://assurance.maif/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
