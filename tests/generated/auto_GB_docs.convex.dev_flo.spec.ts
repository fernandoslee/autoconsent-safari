import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_docs.convex.dev_flo', ['https://docs.convex.dev/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
