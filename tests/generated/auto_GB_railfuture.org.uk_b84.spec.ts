import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_railfuture.org.uk_b84', ['https://www.railfuture.org.uk/Welcome-to-Railfuture'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
