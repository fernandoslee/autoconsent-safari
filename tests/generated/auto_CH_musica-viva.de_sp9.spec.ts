import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_musica-viva.de_sp9', ['https://musica-viva.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
