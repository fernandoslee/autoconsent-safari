import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_suffolkjobsdirect.org_4bk', ['https://www.suffolkjobsdirect.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
