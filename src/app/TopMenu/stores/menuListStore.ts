import { atom } from 'nanostores'

export type MenuListItem = {
    title: string;
};

export type MenuList = MenuListItem[];

export const $menuListStore = atom<MenuList>([{
    title: 'File',
}, {
    title: 'Edit',
}, {
    title: 'View',
}, {
    title: 'Help',
}]);
