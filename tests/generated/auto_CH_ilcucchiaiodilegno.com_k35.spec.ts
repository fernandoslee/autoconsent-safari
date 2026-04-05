import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ilcucchiaiodilegno.com_k35', ['https://www.ilcucchiaiodilegno.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
