import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_zenmarket.jp_wzm', ['https://zenmarket.jp/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
