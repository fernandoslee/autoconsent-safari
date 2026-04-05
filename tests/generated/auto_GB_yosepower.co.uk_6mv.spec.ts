import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_yosepower.co.uk_6mv', ['https://www.yosepower.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
