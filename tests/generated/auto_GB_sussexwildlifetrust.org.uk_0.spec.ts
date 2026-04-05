import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sussexwildlifetrust.org.uk_0', ['https://sussexwildlifetrust.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
