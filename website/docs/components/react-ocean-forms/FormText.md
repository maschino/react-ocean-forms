---
title: FormText
sidebar_label: FormText
---

## Examples

### FormText

Showcase of the form text

```jsx
import { Form, FormText } from 'react-ocean-forms';

function Example() {
  return (
    <Form>
      <p>
        <FormText text="Demo output" />
      </p>

      <p>
        <FormText text="Output with parameters: {param}" values={{ param: 'Demo value' }} />
      </p>
    </Form>
  );
}

<Example />;
```

## API Reference

See [FormText API reference](../../api/react-ocean-forms/modules/formtext#const-formtext) and [prop types](../../api/react-ocean-forms/interfaces/formtext.iformtextprops).
