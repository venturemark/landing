// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: PGPJmONwto
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
import sty from "./PlasmicTimelineLink.module.css"; // plasmic-import: PGPJmONwto/css

export type PlasmicTimelineLink__VariantMembers = {};

export type PlasmicTimelineLink__VariantsArgs = {};
type VariantPropType = keyof PlasmicTimelineLink__VariantsArgs;
export const PlasmicTimelineLink__VariantProps = new Array<VariantPropType>();

export type PlasmicTimelineLink__ArgsType = {
  name?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTimelineLink__ArgsType;
export const PlasmicTimelineLink__ArgProps = new Array<ArgPropType>("name");

export type PlasmicTimelineLink__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface DefaultTimelineLinkProps {
  name?: React.ReactNode;
  className?: string;
}

export const defaultTimelineLink__Args: Partial<PlasmicTimelineLink__ArgsType> =
  {};

function PlasmicTimelineLink__RenderFunc(props: {
  variants: PlasmicTimelineLink__VariantsArgs;
  args: PlasmicTimelineLink__ArgsType;
  overrides: PlasmicTimelineLink__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultTimelineLink__Args, props.args);
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
        sty.root
      )}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"#"}
      </div>

      {p.renderPlasmicSlot({
        defaultContents: (
          <span
            className={classNames(
              projectcss.all,
              projectcss.span,
              projectcss.__wab_text,
              sty.span___0SrJl
            )}
          >
            {"Wins"}
          </span>
        ),

        value: args.name,
        className: classNames(sty.slotTargetName),
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTimelineLink__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTimelineLink__VariantsArgs;
    args?: PlasmicTimelineLink__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTimelineLink__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTimelineLink__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTimelineLink__ArgProps,
      internalVariantPropNames: PlasmicTimelineLink__VariantProps,
    });

    return PlasmicTimelineLink__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTimelineLink";
  } else {
    func.displayName = `PlasmicTimelineLink.${nodeName}`;
  }
  return func;
}

export const PlasmicTimelineLink = Object.assign(
  // Top-level PlasmicTimelineLink renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicTimelineLink
    internalVariantProps: PlasmicTimelineLink__VariantProps,
    internalArgProps: PlasmicTimelineLink__ArgProps,
  }
);

export default PlasmicTimelineLink;
/* prettier-ignore-end */
