## 220811:

- Installed [HeadlessUI](https://headlessui.com/vue/switch)
```
npm install @headlessui/vue
```
- Added switch from HeadlessUI that enables the ProgressBar
- Added [Dialog](https://headlessui.com/vue/dialog) but disabled since button hides everything else

## 220812:

- Dialog is opened and closed via Props. Composition API. Main parent receives event close after clicking the button.
- Tested [Transition Component](https://vuejs.org/guide/built-ins/transition.html#the-transition-component). But without Tailwind