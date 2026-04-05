import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_musicgpt.com_w0a', ['https://musicgpt.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
