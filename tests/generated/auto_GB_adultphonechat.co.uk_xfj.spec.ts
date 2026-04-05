import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_adultphonechat.co.uk_xfj', ['https://www.adultphonechat.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
