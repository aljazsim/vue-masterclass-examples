export const AutoFocusDirective = {
  mounted: (el: HTMLInputElement): void => {
    el.focus();
  }
};
