export const AutoSelectDirective = {
    mounted: (el: HTMLInputElement): void => {
        el.onfocus = () => el.select();
    }
};
