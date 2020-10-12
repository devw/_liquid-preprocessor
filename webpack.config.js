const fs = require("fs");
const path = require("path");
const jsyaml = require("js-yaml");

const preprocessor = (() => {
    console.log("liquid preprocessor...");
    const data = fs.readFileSync("./src/translation.yaml", "utf8");
    return jsyaml.load(data);
})();

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.liquid$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                    {
                        loader: "liquid-loader",
                        options: {
                            data: preprocessor,
                        },
                    },
                ],
            },
        ],
    },
};
