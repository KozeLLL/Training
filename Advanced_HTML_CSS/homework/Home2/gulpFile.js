const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

//img
const imagemin = require('gulp-imagemin');

//js files
const minify = require('gulp-minify');

//clean
const clean = require("gulp-clean");
const cleanCSS = require("gulp-clean-css");


const path = {
    src: {
        scss: './src/scss/**/*.scss',
        html: 'index.html',
        img: './src/img/**/*',
        js: './src/js/**/*.js'
    },
    dist: {
        css: './dist/css',
        img: './dist/img',
        js: './dist/js',
        root: './dist',
    }
}

const createStyle = () => (
    gulp.src(path.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(path.dist.css))
)

const createImg = () => (
    gulp.src(path.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(path.dist.img))
)

const createJs = () => (
    gulp.src(path.src.js)
        .pipe(minify())
        .pipe(gulp.dest(path.dist.js))
)

const cleanDist = () => (
    gulp.src(path.dist.root, {allowEmpty: true})
        .pipe(clean())
)

const watcher = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(path.src.scss, createStyle).on('change', browserSync.reload);
    gulp.watch(path.src.img, createImg).on('change', browserSync.reload);
    gulp.watch(path.src.js, createJs).on('change', browserSync.reload);
    gulp.watch(path.src.html).on('change', browserSync.reload);
}

//task

gulp.task('build', gulp.series(cleanDist, createJs, createStyle, createImg))

gulp.task('dev', gulp.series(cleanDist, createJs, createStyle, createImg, watcher))