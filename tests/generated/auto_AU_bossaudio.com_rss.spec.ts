import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bossaudio.com_rss', ['https://bossaudio.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
