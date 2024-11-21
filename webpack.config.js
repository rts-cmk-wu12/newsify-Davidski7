const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path")
module.exports = {
    mode: "production",
    entry: {
        bundle: "./src/index.js",
        auth: "./src/auth.js",
        home: "./src/home.js",
        archive: "./src/archive.js"


    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",

    },
   
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader",],
            },
            {
                test: /\.html$ /,
                use: ['html.loader']
            },
            {
                test: /\.(jpg|png|svg)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "images/",
                            publicPath: "images/"
                        }
                    }
                ]
            }
        ]
    },
    stats: {
        children: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks:["bundle"]
        }),
        new HtmlWebpackPlugin({
          template: './src/auth.html',
          filename: 'auth.html',
          chunks: ["auth"]
      }),
      new HtmlWebpackPlugin({
        template: './src/home.html',
        filename: 'home.html',
        chunks: ["home"]
    }),
    new HtmlWebpackPlugin({
        template: './src/archive.html',
        filename: 'archive.html',
        chunks: ["archive"]
    })
   
     
  ]

};