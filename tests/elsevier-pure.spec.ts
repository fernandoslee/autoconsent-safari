import generateCMPTests from '../playwright/runner';

generateCMPTests('elsevier-pure', [
    'https://discover.utas.edu.au/',
    'https://experts.griffith.edu.au/',
    'https://profiles.uts.edu.au/',
    'http://experts.deakin.edu.au/',
]);
