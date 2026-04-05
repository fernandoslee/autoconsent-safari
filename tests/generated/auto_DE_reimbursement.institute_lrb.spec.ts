import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_reimbursement.institute_lrb', ['https://reimbursement.institute/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
