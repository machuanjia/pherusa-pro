---
title: 基础使用
group:
  path: /components/Icon
  title: Icon
  order: 0
---

# Icon

```tsx
import React from 'react';
import { Icon, ProConfigration } from 'pherusa-pro';

ProConfigration.setConfigs({
  icon: {
    font: 'iconfont',
    prefix: 'icon-',
  },
});

export default () => <Icon name="table" />;
```
