import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_incontriamoci.xxx_vxv', ['https://incontriamoci.xxx/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
