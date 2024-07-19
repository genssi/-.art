"use strict";

// Подключаем необходимые модули
const gulp = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync");

// Путь к директории, куда будут копироваться файлы после сборки
const dist = "./dist/";
// const dist = "/Applications/MAMP/htdocs/picture"; // адрес к нашему серверу

// Задача для копирования HTML-файла
gulp.task("copy-html", () => {
    return gulp.src("./src/index.html") // Берем исходный HTML-файл
                .pipe(gulp.dest(dist)) // Копируем его в директорию dist
                .pipe(browsersync.stream()); // Обновляем браузер
});

// Задача для сборки JavaScript с помощью Webpack
gulp.task("build-js", () => {
    return gulp.src("./src/js/main.js") // Берем основной JS-файл
                .pipe(webpack({
                    mode: 'development', // Устанавливаем режим разработки
                    output: {
                        filename: 'script.js' // Имя выходного файла
                    },
                    watch: false, // Не отслеживать изменения
                    devtool: "source-map", // Создание source map для отладки
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/, // Правило для обработки всех .js файлов
                            exclude: /(node_modules|bower_components)/, // Исключаем определенные директории
                            use: {
                              loader: 'babel-loader', // Используем babel-loader для транспиляции ES6+ кода
                              options: {
                                presets: [['@babel/preset-env', {
                                    debug: true, // Включаем режим отладки
                                    corejs: 3, // Используем core-js для полифиллов
                                    useBuiltIns: "usage" // Автоматически добавляем полифиллы по мере необходимости
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist)) // Копируем собранный файл в директорию dist
                .on("end", browsersync.reload); // Обновляем браузер
});

// Задача для копирования всех ассетов (картинки, стили и т.д.)
gulp.task("copy-assets", () => {
    return gulp.src("./src/assets/**/*.*") // Берем все файлы из директории assets
                .pipe(gulp.dest(dist + "/assets")) // Копируем их в dist/assets
                .on("end", browsersync.reload); // Обновляем браузер
});

// Задача для отслеживания изменений и автоматического обновления
gulp.task("watch", () => {
    browsersync.init({
        server: "./dist/", // Указываем директорию, которую будет обслуживать сервер
        port: 4000, // Порт для локального сервера
        notify: true // Включаем уведомления в браузере при обновлении
    });
    
    // Отслеживаем изменения в HTML, ассетах и JS-файлах
    gulp.watch("./src/index.html", gulp.parallel("copy-html"));
    gulp.watch("./src/assets/**/*.*", gulp.parallel("copy-assets"));
    gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
});

// Задача для сборки проекта
gulp.task("build", gulp.parallel("copy-html", "copy-assets", "build-js"));

// Задача для сборки JavaScript в режиме продакшн
gulp.task("build-prod-js", () => {
    return gulp.src("./src/js/main.js") // Берем основной JS-файл
                .pipe(webpack({
                    mode: 'production', // Устанавливаем режим продакшн
                    output: {
                        filename: 'script.js' // Имя выходного файла
                    },
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/, // Правило для обработки всех .js файлов
                            exclude: /(node_modules|bower_components)/, // Исключаем определенные директории
                            use: {
                              loader: 'babel-loader', // Используем babel-loader для транспиляции ES6+ кода
                              options: {
                                presets: [['@babel/preset-env', {
                                    corejs: 3, // Используем core-js для полифиллов
                                    useBuiltIns: "usage" // Автоматически добавляем полифиллы по мере необходимости
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist)); // Копируем собранный файл в директорию dist
});

// Задача по умолчанию, запускает задачи watch и build параллельно
gulp.task("default", gulp.parallel("watch", "build"));