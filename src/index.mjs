import assert from 'node:assert/strict';
import { render } from '@x12i/rendrix';

const output = render('Hello {{person.name}}. Task: {{task.title}}.', {
  person: { name: 'Ada' },
  task: { title: 'Review the example' },
});
assert.equal(output, 'Hello Ada. Task: Review the example.');
console.log(output);
