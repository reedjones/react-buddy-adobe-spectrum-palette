import React from 'react';
import {
  Category,
  Component,
  Variant,
  Palette,
} from '@react-buddy/ide-toolbox';

export default () => (
  <Palette>
    <Category name="Text">
      <Component name="Hello message">
        <Variant>
          <span> Hello, React Buddy!</span>
        </Variant>
      </Component>
    </Category>
  </Palette>
);
