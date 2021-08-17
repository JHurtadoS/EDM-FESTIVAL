const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-dart-sass');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const pathsToClean = ['dist'];
const cleanOptions = { root: __dirname, verbose: true, dry: false, exclude: [], };
const webp = require('gulp-webp');
const concat = require('gulp-concat');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcesmaps = require('gulp-sourcemaps');
const terser = require('gulp-terser-js');


const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    js: 'src/JS/**/*.js'
}

function css() {
    return src(paths.scss)
        .pipe(sourcesmaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcesmaps.write('.'))
        .pipe(dest('./build/css'))

}


function minificarcss() {
    return src(paths.scss)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('./build/css'))

}

function javaScript() {
    return src(paths.js)
        .pipe(sourcesmaps.init())
        .pipe(concat('bundle.js'))
        .pipe(terser())
        .pipe(sourcesmaps.write('.'))
        .pipe(dest('./build/JS'))

}

function watchArchivos() {
    watch(paths.scss, css)
    watch(paths.js, javaScript)
}


function imagenes() {
    return src(paths.imagenes)
        .pipe(imagemin())
        .pipe(dest('./build/img'))
        .pipe(notify({ message: 'imagene minificada' }))
}

function versionwebp() {
    return src(paths.imagenes)
        .pipe(webp())
        .pipe(dest('./build/img'))
        .pipe(notify({ message: 'Version webp lista' }))
}

exports.javaScript = javaScript;
exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;
exports.default = series(css, javaScript, imagenes, versionwebp, watchArchivos);