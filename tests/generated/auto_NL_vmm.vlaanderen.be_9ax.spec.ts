import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vmm.vlaanderen.be_9ax', ['https://vmm.vlaanderen.be/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
