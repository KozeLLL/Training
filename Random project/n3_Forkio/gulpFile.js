const gulp = require('gulp');
const browserSync = require("browser-sync").create();
const fileinclude = require('gulp-file-include');


const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

const imageMin = require('gulp-imagemin');
const gulpMinify = require('gulp-minify');

const clean = require('gulp-clean');
const cleanCss = require('gulp-clean-css');

const path = {
    src: {
        scss: './src/scss/**/*.scss',
        html: "./src/html/**/*.html",
        js: './src/js/**/*.js',
        img: "./src/img/**/*",
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
        .pipe(cleanCss({compability: 'ie8'}))
        .pipe(gulp.dest(path.dist.css))
)

const createImg = () => (
    gulp.src(path.src.img)
        .pipe(imageMin())
        .pipe(gulp.dest(path.dist.img))
)

const createJs = () => (
    gulp.src(path.src.js)
        .pipe(gulpMinify())
        .pipe(gulp.dest(path.dist.js))
)

const cleanDist = () => (
    gulp.src(path.dist.root, {allowEmpty: true})
        .pipe(clean())
)

const includeHTML = () =>{
    return gulp.src(['./index.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(path.dist.root));
}

gulp.task('watch', () => {
    gulp.watch('./res/*.html', gulp.series('include'));
})

const watcher = () => {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
    gulp.watch(path.src.scss, createStyle).on('change', browserSync.reload);
    gulp.watch(path.src.img, createImg).on('change', browserSync.reload);
    gulp.watch(path.src.js, createJs).on('change', browserSync.reload);
    gulp.watch(path.src.html).on('change', browserSync.reload);
    gulp.watch(path.src.html, includeHTML).on('change', browserSync.reload);

}

gulp.task('build', gulp.series(cleanDist, createJs, createStyle, createImg))

gulp.task('dev', gulp.series(createJs, createStyle, createImg ))

gulp.task('include', gulp.series( includeHTML, watcher))

gulp.task('clean', gulp.series(cleanDist))
