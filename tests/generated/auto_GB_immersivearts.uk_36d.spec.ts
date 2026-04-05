import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_immersivearts.uk_36d', ['https://immersivearts.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
