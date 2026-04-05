import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_vinatis.co.uk_r4i', ['https://www.vinatis.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
