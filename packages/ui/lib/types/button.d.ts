import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { Plugin as Plugin_2 } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';

export declare type ButtonInstance = InstanceType<typeof _default_2>;

declare const _default: Plugin_2;
export default _default;

declare const _default_2: DefineComponent<    {
type: {
type: PropType<"primary" | "secondary" | "warning" | "danger" | "success" | "info">;
default: string;
};
size: {
type: PropType<"large" | "default" | "small" | "tiny">;
default: string;
};
disabled: {
type: BooleanConstructor;
default: boolean;
};
class: {
type: StringConstructor;
default: string;
};
style: {
type: ObjectConstructor;
default: () => {};
};
}, () => any, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "click"[], "click", PublicProps, Readonly<ExtractPropTypes<    {
type: {
type: PropType<"primary" | "secondary" | "warning" | "danger" | "success" | "info">;
default: string;
};
size: {
type: PropType<"large" | "default" | "small" | "tiny">;
default: string;
};
disabled: {
type: BooleanConstructor;
default: boolean;
};
class: {
type: StringConstructor;
default: string;
};
style: {
type: ObjectConstructor;
default: () => {};
};
}>> & {
onClick?: ((...args: any[]) => any) | undefined;
}, {
size: "large" | "default" | "small" | "tiny";
type: "primary" | "secondary" | "warning" | "danger" | "success" | "info";
disabled: boolean;
class: string;
style: Record<string, any>;
}, {}>;

export { }
