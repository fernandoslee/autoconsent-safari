import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_riversidestudios.co.uk_xld', ['https://riversidestudios.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
