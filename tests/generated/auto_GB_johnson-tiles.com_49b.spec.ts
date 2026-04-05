import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_johnson-tiles.com_49b', ['https://www.johnson-tiles.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
