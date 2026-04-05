import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_studentdoctor.net_o0r', ['https://www.studentdoctor.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
