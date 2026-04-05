import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_stoklasa.fr_sge', ['https://www.stoklasa.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
