import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_serverhero.de_uvt', ['https://serverhero.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
