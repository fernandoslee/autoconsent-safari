import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_servigroup.com_9n9', ['https://www.servigroup.com/es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
