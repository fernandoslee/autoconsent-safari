import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_scholastic.com_uz4', ['https://www.scholastic.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
