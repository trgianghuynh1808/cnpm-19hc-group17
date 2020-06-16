const path = require("path");
const Dotenv = require("dotenv-webpack");

const ENV = process.env.NODE_ENV || "development";

module.exports = {
  webpack: (config, options) => {
    config.node = {
      fs: "empty",
    };

    config.module.rules.push({
      test: /\.(html)$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "html-loader",
          options: {
            attrs: [":data-src"],
          },
        },
      ],
    });

    config.plugins = config.plugins || [];

    let envFilePath = "env/.env";
    if (ENV !== "production") {
      envFilePath = envFilePath + "." + ENV;
    }

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, envFilePath),
        systemvars: true,
      }),
    ];

    return config;
  },
};
