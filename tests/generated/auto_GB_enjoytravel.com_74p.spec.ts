import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_enjoytravel.com_74p', ['https://www.enjoytravel.com/us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
