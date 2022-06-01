// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: Fs8bTUrvZrvfhCr
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
import ActionBar from "../../ActionBar"; // plasmic-import: eUnRsS9UXR/component
import ContentPost from "../../ContentPost"; // plasmic-import: A1UjtYt6k0/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicFeedUpdate.module.css"; // plasmic-import: Fs8bTUrvZrvfhCr/css

import IconPlusIcon from "./icons/PlasmicIcon__IconPlus"; // plasmic-import: B5QLKmr2tW/icon
import IconCloseIcon from "./icons/PlasmicIcon__IconClose"; // plasmic-import: v016HsKmfL/icon

export type PlasmicFeedUpdate__VariantMembers = {
  isOwner: "isOwner";
  isPublic: "isPublic";
};

export type PlasmicFeedUpdate__VariantsArgs = {
  isOwner?: SingleBooleanChoiceArg<"isOwner">;
  isPublic?: SingleBooleanChoiceArg<"isPublic">;
};

type VariantPropType = keyof PlasmicFeedUpdate__VariantsArgs;
export const PlasmicFeedUpdate__VariantProps = new Array<VariantPropType>(
  "isOwner",
  "isPublic"
);

export type PlasmicFeedUpdate__ArgsType = {};
type ArgPropType = keyof PlasmicFeedUpdate__ArgsType;
export const PlasmicFeedUpdate__ArgProps = new Array<ArgPropType>();

export type PlasmicFeedUpdate__OverridesType = {
  root?: p.Flex<"div">;
  actionBar?: p.Flex<typeof ActionBar>;
  feedContainer?: p.Flex<"div">;
  date?: p.Flex<"span">;
  date2?: p.Flex<"span">;
};

export interface DefaultFeedUpdateProps {
  isOwner?: SingleBooleanChoiceArg<"isOwner">;
  isPublic?: SingleBooleanChoiceArg<"isPublic">;
  className?: string;
}

export const defaultFeedUpdate__Args: Partial<PlasmicFeedUpdate__ArgsType> = {};

function PlasmicFeedUpdate__RenderFunc(props: {
  variants: PlasmicFeedUpdate__VariantsArgs;
  args: PlasmicFeedUpdate__ArgsType;
  overrides: PlasmicFeedUpdate__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultFeedUpdate__Args, props.args);
  const $props = args;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {(hasVariant(variants, "isOwner", "isOwner") ? true : false) ? (
        <ActionBar
          data-plasmic-name={"actionBar"}
          data-plasmic-override={overrides.actionBar}
          className={classNames("__wab_instance", sty.actionBar, {
            [sty.actionBarisOwner]: hasVariant(variants, "isOwner", "isOwner"),
          })}
          isActive={true}
        />
      ) : null}

      <p.Stack
        as={"div"}
        data-plasmic-name={"feedContainer"}
        data-plasmic-override={overrides.feedContainer}
        hasGap={true}
        className={classNames(projectcss.all, sty.feedContainer)}
      >
        <ContentPost
          className={classNames("__wab_instance", sty.contentPost___4JU8W, {
            [sty.contentPostisPublic___4JU8WyCnHl]: hasVariant(
              variants,
              "isPublic",
              "isPublic"
            ),
          })}
          date={
            <span
              data-plasmic-name={"date"}
              data-plasmic-override={overrides.date}
              className={classNames(
                projectcss.all,
                projectcss.span,
                projectcss.__wab_text,
                sty.date
              )}
            >
              {"3h ago"}
            </span>
          }
          state={
            hasVariant(variants, "isPublic", "isPublic")
              ? ("isPublic" as const)
              : undefined
          }
        />

        <ContentPost
          className={classNames("__wab_instance", sty.contentPost__f7T3C, {
            [sty.contentPostisPublic__f7T3CYCnHl]: hasVariant(
              variants,
              "isPublic",
              "isPublic"
            ),
          })}
          date={
            <span
              data-plasmic-name={"date2"}
              data-plasmic-override={overrides.date2}
              className={classNames(
                projectcss.all,
                projectcss.span,
                projectcss.__wab_text,
                sty.date2
              )}
            >
              {"3h ago"}
            </span>
          }
          state={
            hasVariant(variants, "isPublic", "isPublic")
              ? ("isPublic" as const)
              : undefined
          }
        />
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "actionBar", "feedContainer", "date", "date2"],
  actionBar: ["actionBar"],
  feedContainer: ["feedContainer", "date", "date2"],
  date: ["date"],
  date2: ["date2"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  actionBar: typeof ActionBar;
  feedContainer: "div";
  date: "span";
  date2: "span";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFeedUpdate__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFeedUpdate__VariantsArgs;
    args?: PlasmicFeedUpdate__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFeedUpdate__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFeedUpdate__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicFeedUpdate__ArgProps,
      internalVariantPropNames: PlasmicFeedUpdate__VariantProps,
    });

    return PlasmicFeedUpdate__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeedUpdate";
  } else {
    func.displayName = `PlasmicFeedUpdate.${nodeName}`;
  }
  return func;
}

export const PlasmicFeedUpdate = Object.assign(
  // Top-level PlasmicFeedUpdate renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    actionBar: makeNodeComponent("actionBar"),
    feedContainer: makeNodeComponent("feedContainer"),
    date: makeNodeComponent("date"),
    date2: makeNodeComponent("date2"),

    // Metadata about props expected for PlasmicFeedUpdate
    internalVariantProps: PlasmicFeedUpdate__VariantProps,
    internalArgProps: PlasmicFeedUpdate__ArgProps,
  }
);

export default PlasmicFeedUpdate;
/* prettier-ignore-end */