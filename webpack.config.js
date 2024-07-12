const path = require('path');
module.exports = {
    entry: "./src/index.js",    //entry point of your application
    output: {
        filename: "bundle.js",  //output bundle file name
        path: path.resolve(__dirname, "dist"),  //output directory
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                },
              },
              {
                test: /\.css$/, // Add this rule for CSS files
                use: ['style-loader', 'css-loader'],
              },
              {
                test: /\.(png|jpg|jpeg|gif|svg|webp)$/, // Add this rule for image files
                use: {
                  loader: 'file-loader',
                  options: {
                    name: '[path][name].[ext]',
                  },
                },
              },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Updated property
          },
          compress: true,
          port: 9000,//open the defaultweb browser when the server starts
    }
};