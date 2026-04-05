import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bridgemind.ai_ctr', ['https://www.bridgemind.ai/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
