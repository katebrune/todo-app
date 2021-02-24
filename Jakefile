const path = require('path')
const glob = require('glob')

const projectDir = __dirname
const tsconfigPath = path.join(projectDir, 'tsconfig.json')
const tasks = glob.sync("tasks/**/*.task.{ts,js}")

require('ts-node').register({
    project: tsconfigPath
})

tasks.forEach(taskFile => {
    require(path.join(projectDir, taskFile))
})