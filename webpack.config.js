const webpack = require('webpack'),
      path = require('path'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      BrowserSyncPlugin = require('browser-sync-webpack-plugin');

//- ### CHOOSE MODULE FOR ENVIROMENT
let isProduction = process.env.NODE_ENV === 'production',
  cssDev = ['style-loader', 'css-loader', 'sass-loader'],
  cssProd = ExtractTextPlugin.extract({
    fallback: [{
      loader: 'style-loader',
      options: {
        url: false,
      }
    }],
    use: [
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          url: false
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: function () {
            return [
              require('precss'),
              require('autoprefixer')
            ];
          }
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }
    ]
  }),
  cssConf = isProduction ? cssProd : cssDev;

module.exports = {
  entry: './app/js/app.js',
  devtool: 'inline-source-map',
  output: {
    path: __dirname + '/js/',
    filename: 'app.js',
    sourceMapFilename: 'app.map',
    libraryTarget: 'var',
    library: 'utils',
  },
  module: {
    rules: [
      //- ### HTML
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '../[name].html'
            }
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true
            }
          }
        ]
      },
      //- ### SASS
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: [{
            loader: 'style-loader',
            options: {
              url: false,
            }
          }],
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                url: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    require('precss'),
                    require('autoprefixer')
                  ];
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
      //- ### JAVASCRIPT
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env'],
            plugins: ['react-pug']
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/styles.css'),
    //- ### SERVER
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      //proxy: 'obchod/',
      server: { baseDir: ['./'] }
    })
  ]
};
