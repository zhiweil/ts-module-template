# How to Create Typescript NPM Module

- Create a Node.js project
  - 'npm init' - file package.json is created
  - update fields "name", "author", "tags", and etc in package.json
- install package dependencies
  ```bash
  npm install --save-dev typescript ts-node
  ```

* Setup environment for Typescript
  - "npx tsc --init" - file tsconfig.json will be created
  - update "outDir" field to "dist" in tsconfig.json
* Create "src" folder under root and create index.ts
  - Write code in index.ts
  - Run the code by
    ```bash
    npx ts-node src/index.ts
    ```
* Create file .gitignore, [here is the template](.gitignore);
* Build Module
  - Install tsup by "npm install --save-dev tsup"
  - Create file tsup.config.ts under root folder. [here is a template](./tsup.config.ts).
  - Update the "build" script in packate.json.
    ```json
    "scripts": {
      "build": "tsup",
    },
    ```
    - Run "npm run build" - update package.json with the following settings under the root object
    ```json
    {
      "main": "./dist/index.js",
      "module": "./dist/index.mjs",
      "types": "./dist/index.d.ts",
      "files": ["dist"]
    }
    ```
* Test

  - Install Jest
    ```bash
    npm install --save-dev jest ts-jest @types/jest
    ```
  - Add jest.config.js to root folder. [Here is a template](./jest.config.js)

  * Create folder "tests" under root folder, and create a test file under it ["hello.test.ts"](./tests/hello.test.ts)
  * update the "test" script in package.json to "jest".
  * run test by "npm run test"

* Publish to NPMJS

  ```bash
  npm login

  # publish the first version
  npm publish --access=public

  # publish the following versions
  npm version patch
  npm publish 
  ```
