/** @type {import('vite').UserConfig} */

export default {
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                "js-minifier": './js-minifier.html',
                "example": './example.html',
            }
        }
    }
}