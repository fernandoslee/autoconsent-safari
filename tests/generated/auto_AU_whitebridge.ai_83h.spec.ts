import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_whitebridge.ai_83h', ['https://whitebridge.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
