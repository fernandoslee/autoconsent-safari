import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ipayimpact.co.uk_jh0', ['https://www.ipayimpact.co.uk/IPI/Account/LogOn'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
