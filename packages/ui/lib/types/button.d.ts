import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsBase } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { CreateComponentPublicInstance } from 'vue';
import { ExtractPropTypes } from 'vue';
import { Plugin as Plugin_2 } from 'vue';
import { PropType } from 'vue';
import { VNodeProps } from 'vue';

declare const _default: ((Plugin_2 & {
    new (...args: any[]): CreateComponentPublicInstance<Readonly<ExtractPropTypes<    {
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
    }, () => any, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "click"[], VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly<ExtractPropTypes<    {
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
    }, true, {}, {}, {
    P: {};
    B: {};
    D: {};
    C: {};
    M: {};
    Defaults: {};
    }, Readonly<ExtractPropTypes<    {
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
    }, () => any, {}, {}, {}, {
    size: "large" | "default" | "small" | "tiny";
    type: "primary" | "secondary" | "warning" | "danger" | "success" | "info";
    disabled: boolean;
    class: string;
    style: Record<string, any>;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
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
}, () => any, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "click"[], "click", {
size: "large" | "default" | "small" | "tiny";
type: "primary" | "secondary" | "warning" | "danger" | "success" | "info";
disabled: boolean;
class: string;
style: Record<string, any>;
}, {}, string, {}>) & VNodeProps) & AllowedComponentProps & ComponentCustomProps;
export default _default;

export { }
