const path = require('path')
const chalk = require('chalk');
const markdownMagic = require('markdown-magic')

const config = {
  matchWord: 'AURO-GENERATED-CONTENT'
}

const callback = function(updatedContent, outputConfig) {
  console.log(chalk.green('Finished compiling documentation.'));
}

const markdownPathReadme = path.join(__dirname, '../README.md')
markdownMagic(markdownPathReadme, config, callback)

const markdownPathDemo = path.join(__dirname, '../demo/demo.md')
markdownMagic(markdownPathDemo, config, callback)
