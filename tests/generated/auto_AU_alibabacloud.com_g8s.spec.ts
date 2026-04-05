import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_alibabacloud.com_g8s', ['https://www.alibabacloud.com/en?_p_lc=6'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
