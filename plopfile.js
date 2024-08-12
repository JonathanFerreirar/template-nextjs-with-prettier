/* eslint-disable prettier/prettier */
/* eslint-disable import/no-anonymous-default-export */

export default function (plop) {
  plop.setGenerator('component', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name',
        filter(input) {
          return input.charAt(0).toLowerCase() + input.slice(1);
        },
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/components/{{name}}',
        templateFiles: './plop/comp/*.hbs',
        base: './plop/comp',
      },
    ],
  });
}
