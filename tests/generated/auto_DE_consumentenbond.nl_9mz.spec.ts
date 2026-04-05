import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_consumentenbond.nl_9mz', ['https://www.consumentenbond.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
