import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_osmovita.de_48v', ['https://www.osmovita.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
