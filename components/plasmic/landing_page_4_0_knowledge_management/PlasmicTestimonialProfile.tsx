// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4XDKe2Y2CSQJqugRctvMof
// Component: ImsZZpVcfoJKx
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
import TestiLink from "../../TestiLink"; // plasmic-import: Ct1RIUgXag4lA/component

import { useScreenVariants as useScreenVariantsszbTUtTUfDw81Pi } from "../shared/PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_shared_css from "../shared/plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import projectcss from "./plasmic_landing_page_4_0_knowledge_management.module.css"; // plasmic-import: 4XDKe2Y2CSQJqugRctvMof/projectcss
import sty from "./PlasmicTestimonialProfile.module.css"; // plasmic-import: ImsZZpVcfoJKx/css

export type PlasmicTestimonialProfile__VariantMembers = {};

export type PlasmicTestimonialProfile__VariantsArgs = {};
type VariantPropType = keyof PlasmicTestimonialProfile__VariantsArgs;
export const PlasmicTestimonialProfile__VariantProps =
  new Array<VariantPropType>();

export type PlasmicTestimonialProfile__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot4?: React.ReactNode;
  slot5?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTestimonialProfile__ArgsType;
export const PlasmicTestimonialProfile__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2",
  "slot3",
  "slot4",
  "slot5"
);

export type PlasmicTestimonialProfile__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultTestimonialProfileProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot4?: React.ReactNode;
  slot5?: React.ReactNode;
  className?: string;
}

export const defaultTestimonialProfile__Args: Partial<PlasmicTestimonialProfile__ArgsType> =
  {};

function PlasmicTestimonialProfile__RenderFunc(props: {
  variants: PlasmicTestimonialProfile__VariantsArgs;
  args: PlasmicTestimonialProfile__ArgsType;
  overrides: PlasmicTestimonialProfile__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultTestimonialProfile__Args, props.args);
  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsszbTUtTUfDw81Pi(),
  });

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
        plasmic_shared_css.plasmic_tokens,
        sty.root
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <img
            alt={""}
            className={classNames(
              projectcss.all,
              projectcss.img,
              sty.img___4P27J
            )}
            src={
              "/plasmic/landing_page_4_0_knowledge_management/images/mikepng.png"
            }
          />
        ),

        value: args.slot3,
      })}

      {(hasVariant(globalVariants, "screen", "desktopLarge") ? true : true) ? (
        <div className={classNames(projectcss.all, sty.freeBox___0UVp)}>
          <h2
            className={classNames(projectcss.all, projectcss.h2, sty.h2__uWigg)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Mike Fix",
              value: args.children,
              className: classNames(sty.slotTargetChildren),
            })}
          </h2>

          <p.Stack
            as={"h2"}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.h2,
              sty.h2___3Bbhy
            )}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Software Engineer, Stripe",
              value: args.slot,
              className: classNames(sty.slotTargetSlot),
            })}

            {p.renderPlasmicSlot({
              defaultContents: "Enter some text",
              value: args.slot4,
              className: classNames(sty.slotTargetSlot4),
            })}

            {p.renderPlasmicSlot({
              defaultContents: (
                <TestiLink
                  className={classNames("__wab_instance", sty.testiLink__gY7Ds)}
                />
              ),

              value: args.slot5,
            })}
          </p.Stack>
        </div>
      ) : null}

      <div className={classNames(projectcss.all, sty.freeBox__bw1V)}>
        {p.renderPlasmicSlot({
          defaultContents:
            "I love reading shipped emails. It's fun to read about what others teams are working on.",
          value: args.slot2,
          className: classNames(sty.slotTargetSlot2),
        })}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTestimonialProfile__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTestimonialProfile__VariantsArgs;
    args?: PlasmicTestimonialProfile__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTestimonialProfile__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTestimonialProfile__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTestimonialProfile__ArgProps,
      internalVariantPropNames: PlasmicTestimonialProfile__VariantProps,
    });

    return PlasmicTestimonialProfile__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTestimonialProfile";
  } else {
    func.displayName = `PlasmicTestimonialProfile.${nodeName}`;
  }
  return func;
}

export const PlasmicTestimonialProfile = Object.assign(
  // Top-level PlasmicTestimonialProfile renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTestimonialProfile
    internalVariantProps: PlasmicTestimonialProfile__VariantProps,
    internalArgProps: PlasmicTestimonialProfile__ArgProps,
  }
);

export default PlasmicTestimonialProfile;
/* prettier-ignore-end */
