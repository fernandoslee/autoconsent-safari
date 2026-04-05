import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_atlantic.money_3i4', ['https://atlantic.money/gb/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
