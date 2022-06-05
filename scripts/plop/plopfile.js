module.exports = (plop) => {
  plop.setGenerator('Component', {
    description: 'Basic component structure',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: './templates/component/component.hbs',
      },
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/index.ts',
        templateFile: './templates/component/component.index.hbs',
      },

      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: './templates/component/component.styles.hbs',
      },
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/{{pascalCase name}}.types.ts',
        templateFile: './templates/component/component.types.hbs',
      },
    ],
  });

  plop.setGenerator('Hook', {
    description: 'Basic hook structure',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your hook name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/hooks/{{camelCase name}}/{{camelCase name}}.ts',
        templateFile: './templates/hook/hook.hbs',
      },
      {
        type: 'add',
        path: '../../src/hooks/{{camelCase name}}/index.ts',
        templateFile: './templates/hook/hook.index.hbs',
      },
    ],
  });

  plop.setGenerator('Icon', {
    description: 'Basic icon structure',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your icon name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/icons/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: './templates/icon/icon.hbs',
      },
      {
        type: 'add',
        path: '../../src/icons/{{pascalCase name}}/index.ts',
        templateFile: './templates/icon/icon.index.hbs',
      },
      {
        type: 'add',
        path: '../../src/icons/{{pascalCase name}}/{{pascalCase name}}.types.ts',
        templateFile: './templates/icon/icon.types.hbs',
      },
    ],
  });

  plop.setGenerator('Module', {
    description: 'Basic redux module structure',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your module name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/store/{{camelCase name}}/index.ts',
        templateFile: './templates/module/module.index.hbs',
      },
      {
        type: 'add',
        path: '../../src/store/{{camelCase name}}/{{camelCase name}}.slice.ts',
        templateFile: './templates/module/module.slice.hbs',
      },
      {
        type: 'add',
        path: '../../src/store/{{camelCase name}}/{{camelCase name}}.types.ts',
        templateFile: './templates/module/module.types.hbs',
      },
    ],
  });

  plop.setGenerator('Util', {
    description: 'Basic util structure',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your util name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/utils/{{camelCase name}}/{{camelCase name}}.ts',
        templateFile: './templates/util/util.hbs',
      },
      {
        type: 'add',
        path: '../../src/utils/{{camelCase name}}/index.ts',
        templateFile: './templates/util/util.index.hbs',
      },
      {
        type: 'add',
        path: '../../src/utils/{{camelCase name}}/{{camelCase name}}.types.ts',
        templateFile: './templates/util/util.types.hbs',
      },
    ],
  });
};
