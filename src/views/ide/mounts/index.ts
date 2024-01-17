const modules = import.meta.globEager("./*.vue");
const modulesDefault = Object.values(modules).map((item) => item.default);

export const mounts: Array<IMountType> = modulesDefault.map((item) => {
  return {
    name: item.name,
    title: item.title,
    defaultData: item.defaultData,
    component: item,
  };
});

export interface IMountType {
  key?: number;
  name: string;
  title: string;
  defaultData: any;
  component: any;
}
