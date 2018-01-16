#! /bin/sh
npm i webpack -S
npm i react-router-dom webpack react-dom react style-loader css-loader babel-core babel-loader babel-preset-es2015 babel-preset-react -S
npm install --save-dev babel-preset-stage-2
npm install semantic-ui-react -S
touch .babelrc
echo "{\n \"presets\": [\"es2015\", \"react\"]\n}" > .babelrc
