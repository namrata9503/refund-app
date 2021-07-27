module.exports = {
    purge: {
        enabled: true,
        content: ['./src/**/*.html', './src/**/*.ts'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        backgroundColor: (theme) => ({
            ...theme('colors'),
            primary: '#1F0043',
            secondary: '#E50071',
            danger: '#e3342f',
        }),
        extend: {
            backgroundImage: () => ({
                // eslint-disable-next-line max-len
                'header-pattern': 'linear-gradient(to left bottom, rgba(6, 195, 255, 1) 0, rgba(181, 222, 221, 1) 100%)',
            }),
            fontFamily: {
                montserrat: ['Montserrat'],
                raleway: ['Raleway'],
                lato: ['Lato'],
                garamond: ['Garamond'],
            },
        },
    },
    variants: {
        extend: {
            objectFit: ['hover', 'focus'],
            backgroundImage: ['hover', 'focus', 'responsive'],
        },
    },
    plugins: [],
    corePlugins: {},
    // eslint-disable-next-line eol-last
};