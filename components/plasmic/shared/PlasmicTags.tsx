// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: 0wz8hGqZgNQ
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicTags.module.css"; // plasmic-import: 0wz8hGqZgNQ/css

import IconCloseIcon from "./icons/PlasmicIcon__IconClose"; // plasmic-import: v016HsKmfL/icon

export type PlasmicTags__VariantMembers = {
  buttonStyle:
    | "primaryPurple"
    | "secondaryPurple"
    | "secondaryGreen"
    | "red"
    | "blue"
    | "grey";
  buttonFeatures: "icon" | "hasText";
  disabled: "disabled";
};

export type PlasmicTags__VariantsArgs = {
  buttonStyle?: SingleChoiceArg<
    | "primaryPurple"
    | "secondaryPurple"
    | "secondaryGreen"
    | "red"
    | "blue"
    | "grey"
  >;
  buttonFeatures?: MultiChoiceArg<"icon" | "hasText">;
  disabled?: SingleBooleanChoiceArg<"disabled">;
};

type VariantPropType = keyof PlasmicTags__VariantsArgs;
export const PlasmicTags__VariantProps = new Array<VariantPropType>(
  "buttonStyle",
  "buttonFeatures",
  "disabled"
);

export type PlasmicTags__ArgsType = {
  children?: React.ReactNode;
  text2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTags__ArgsType;
export const PlasmicTags__ArgProps = new Array<ArgPropType>(
  "children",
  "text2"
);

export type PlasmicTags__OverridesType = {
  root?: p.Flex<"div">;
  button?: p.Flex<"button">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultTagsProps {
  children?: React.ReactNode;
  text2?: React.ReactNode;
  buttonStyle?: SingleChoiceArg<
    | "primaryPurple"
    | "secondaryPurple"
    | "secondaryGreen"
    | "red"
    | "blue"
    | "grey"
  >;
  buttonFeatures?: MultiChoiceArg<"icon" | "hasText">;
  disabled?: SingleBooleanChoiceArg<"disabled">;
  className?: string;
}

export const defaultTags__Args: Partial<PlasmicTags__ArgsType> = {};

function PlasmicTags__RenderFunc(props: {
  variants: PlasmicTags__VariantsArgs;
  args: PlasmicTags__ArgsType;
  overrides: PlasmicTags__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultTags__Args, props.args);
  const $props = args;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootbuttonStyle_blue]: hasVariant(
            variants,
            "buttonStyle",
            "blue"
          ),
          [sty.rootbuttonStyle_primaryPurple]: hasVariant(
            variants,
            "buttonStyle",
            "primaryPurple"
          ),
          [sty.rootbuttonStyle_red]: hasVariant(variants, "buttonStyle", "red"),
          [sty.rootbuttonStyle_secondaryGreen]: hasVariant(
            variants,
            "buttonStyle",
            "secondaryGreen"
          ),
          [sty.rootbuttonStyle_secondaryPurple]: hasVariant(
            variants,
            "buttonStyle",
            "secondaryPurple"
          ),
        }
      )}
    >
      <button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames(projectcss.all, projectcss.button, sty.button, {
          [sty.buttonbuttonFeatures_icon]: hasVariant(
            variants,
            "buttonFeatures",
            "icon"
          ),
          [sty.buttonbuttonStyle_blue]: hasVariant(
            variants,
            "buttonStyle",
            "blue"
          ),
          [sty.buttonbuttonStyle_grey]: hasVariant(
            variants,
            "buttonStyle",
            "grey"
          ),
          [sty.buttonbuttonStyle_grey_buttonFeatures_icon]:
            hasVariant(variants, "buttonStyle", "grey") &&
            hasVariant(variants, "buttonFeatures", "icon"),
          [sty.buttonbuttonStyle_primaryPurple]: hasVariant(
            variants,
            "buttonStyle",
            "primaryPurple"
          ),
          [sty.buttonbuttonStyle_red]: hasVariant(
            variants,
            "buttonStyle",
            "red"
          ),
          [sty.buttonbuttonStyle_secondaryGreen]: hasVariant(
            variants,
            "buttonStyle",
            "secondaryGreen"
          ),
          [sty.buttonbuttonStyle_secondaryPurple]: hasVariant(
            variants,
            "buttonStyle",
            "secondaryPurple"
          ),
          [sty.buttondisabled]: hasVariant(variants, "disabled", "disabled"),
        })}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox, {
            [sty.freeBoxbuttonStyle_blue]: hasVariant(
              variants,
              "buttonStyle",
              "blue"
            ),
            [sty.freeBoxbuttonStyle_primaryPurple]: hasVariant(
              variants,
              "buttonStyle",
              "primaryPurple"
            ),
          })}
        >
          {(hasVariant(variants, "buttonFeatures", "hasText") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__pbfPp
                    )}
                  >
                    {"Tag Name"}
                  </div>
                ),

                value: args.text2,
                className: classNames(sty.slotTargetText2, {
                  [sty.slotTargetText2buttonFeatures_hasText]: hasVariant(
                    variants,
                    "buttonFeatures",
                    "hasText"
                  ),
                  [sty.slotTargetText2buttonFeatures_icon]: hasVariant(
                    variants,
                    "buttonFeatures",
                    "icon"
                  ),
                  [sty.slotTargetText2buttonStyle_primaryPurple]: hasVariant(
                    variants,
                    "buttonStyle",
                    "primaryPurple"
                  ),
                  [sty.slotTargetText2buttonStyle_red]: hasVariant(
                    variants,
                    "buttonStyle",
                    "red"
                  ),
                  [sty.slotTargetText2buttonStyle_secondaryGreen]: hasVariant(
                    variants,
                    "buttonStyle",
                    "secondaryGreen"
                  ),
                  [sty.slotTargetText2buttonStyle_secondaryPurple]: hasVariant(
                    variants,
                    "buttonStyle",
                    "secondaryPurple"
                  ),
                  [sty.slotTargetText2disabled]: hasVariant(
                    variants,
                    "disabled",
                    "disabled"
                  ),
                }),
              })
            : null}
          {(hasVariant(variants, "buttonFeatures", "icon") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <IconCloseIcon
                    className={classNames(projectcss.all, sty.svg__vEG)}
                    role={"img"}
                  />
                ),

                value: args.children,
                className: classNames(sty.slotTargetChildren, {
                  [sty.slotTargetChildrenbuttonFeatures_icon]: hasVariant(
                    variants,
                    "buttonFeatures",
                    "icon"
                  ),
                  [sty.slotTargetChildrenbuttonStyle_grey]: hasVariant(
                    variants,
                    "buttonStyle",
                    "grey"
                  ),
                  [sty.slotTargetChildrenbuttonStyle_grey_buttonFeatures_icon]:
                    hasVariant(variants, "buttonStyle", "grey") &&
                    hasVariant(variants, "buttonFeatures", "icon"),
                  [sty.slotTargetChildrenbuttonStyle_red]: hasVariant(
                    variants,
                    "buttonStyle",
                    "red"
                  ),
                  [sty.slotTargetChildrenbuttonStyle_red_buttonFeatures_icon]:
                    hasVariant(variants, "buttonFeatures", "icon") &&
                    hasVariant(variants, "buttonStyle", "red"),
                  [sty.slotTargetChildrenbuttonStyle_secondaryGreen_buttonFeatures_icon]:
                    hasVariant(variants, "buttonFeatures", "icon") &&
                    hasVariant(variants, "buttonStyle", "secondaryGreen"),
                  [sty.slotTargetChildrenbuttonStyle_secondaryPurple_buttonFeatures_icon]:
                    hasVariant(variants, "buttonFeatures", "icon") &&
                    hasVariant(variants, "buttonStyle", "secondaryPurple"),
                }),
              })
            : null}
        </p.Stack>
      </button>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "button", "freeBox"],
  button: ["button", "freeBox"],
  freeBox: ["freeBox"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  button: "button";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTags__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTags__VariantsArgs;
    args?: PlasmicTags__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTags__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTags__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTags__ArgProps,
      internalVariantPropNames: PlasmicTags__VariantProps,
    });

    return PlasmicTags__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTags";
  } else {
    func.displayName = `PlasmicTags.${nodeName}`;
  }
  return func;
}

export const PlasmicTags = Object.assign(
  // Top-level PlasmicTags renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicTags
    internalVariantProps: PlasmicTags__VariantProps,
    internalArgProps: PlasmicTags__ArgProps,
  }
);

export default PlasmicTags;
/* prettier-ignore-end */