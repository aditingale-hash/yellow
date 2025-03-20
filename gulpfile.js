const { src, dest } = require('gulp')
const concat = require('gulp-concat')
const postcss = require('gulp-postcss')
const purgecss = require('@fullhuman/postcss-purgecss')

function tailwind() {
    return src('styles.css')
        .pipe(postcss([
            require('tailwindcss'),
            require('autoprefixer'),
            purgecss({
                content: ['./*.html'],
                defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
            })
        ]))
        .pipe(concat('styles.css'))
        .pipe(dest('./src/assests/styles'))
}

exports.tailwind = tailwind