import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_switchcarrental.co.uk_3yh', ['https://www.switchcarrental.co.uk/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
