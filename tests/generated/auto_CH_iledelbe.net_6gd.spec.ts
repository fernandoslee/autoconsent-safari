import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_iledelbe.net_6gd', ['https://www.iledelbe.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
