import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_thorntons.com_n8n', ['https://www.thorntons.com/uk/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
