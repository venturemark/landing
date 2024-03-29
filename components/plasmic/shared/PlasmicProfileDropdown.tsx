// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: bGjqf-R4Tc
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
import IconButton from "../../IconButton"; // plasmic-import: UIpuE7M1YY/component
import PhotoAvatar from "../../PhotoAvatar"; // plasmic-import: uaoIqTcPRC-/component
import ListItem from "../../ListItem"; // plasmic-import: q8aEgDsN8_/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicProfileDropdown.module.css"; // plasmic-import: bGjqf-R4Tc/css

import IconCloseIcon from "./icons/PlasmicIcon__IconClose"; // plasmic-import: v016HsKmfL/icon

export type PlasmicProfileDropdown__VariantMembers = {
  isMobile: "isMobile";
};

export type PlasmicProfileDropdown__VariantsArgs = {
  isMobile?: SingleBooleanChoiceArg<"isMobile">;
};

type VariantPropType = keyof PlasmicProfileDropdown__VariantsArgs;
export const PlasmicProfileDropdown__VariantProps = new Array<VariantPropType>(
  "isMobile"
);

export type PlasmicProfileDropdown__ArgsType = {
  prop?: React.ReactNode;
  userInitials?: React.ReactNode;
  userName?: React.ReactNode;
  userEmail?: React.ReactNode;
  prop3?: React.ReactNode;
  prop2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicProfileDropdown__ArgsType;
export const PlasmicProfileDropdown__ArgProps = new Array<ArgPropType>(
  "prop",
  "userInitials",
  "userName",
  "userEmail",
  "prop3",
  "prop2"
);

export type PlasmicProfileDropdown__OverridesType = {
  root?: p.Flex<"div">;
  rectangle574?: p.Flex<"div">;
  text?: p.Flex<"div">;
  close?: p.Flex<typeof IconButton>;
  svg?: p.Flex<"svg">;
  photoAvatar?: p.Flex<typeof PhotoAvatar>;
  ul?: p.Flex<"ul">;
  createNewVenture?: p.Flex<typeof ListItem>;
  viewProfile?: p.Flex<typeof ListItem>;
  logout?: p.Flex<typeof ListItem>;
};

export interface DefaultProfileDropdownProps {
  prop?: React.ReactNode;
  userInitials?: React.ReactNode;
  userName?: React.ReactNode;
  userEmail?: React.ReactNode;
  prop3?: React.ReactNode;
  prop2?: React.ReactNode;
  isMobile?: SingleBooleanChoiceArg<"isMobile">;
  className?: string;
}

export const defaultProfileDropdown__Args: Partial<PlasmicProfileDropdown__ArgsType> =
  {};

function PlasmicProfileDropdown__RenderFunc(props: {
  variants: PlasmicProfileDropdown__VariantsArgs;
  args: PlasmicProfileDropdown__ArgsType;
  overrides: PlasmicProfileDropdown__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultProfileDropdown__Args, props.args);
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
        data-plasmic-name={"rectangle574"}
        data-plasmic-override={overrides.rectangle574}
        className={classNames(projectcss.all, sty.rectangle574, {
          [sty.rectangle574isMobile]: hasVariant(
            variants,
            "isMobile",
            "isMobile"
          ),
        })}
      >
        {(hasVariant(variants, "isMobile", "isMobile") ? true : true) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox___4LHLu, {
              [sty.freeBoxisMobile___4LHLuKb6FV]: hasVariant(
                variants,
                "isMobile",
                "isMobile"
              ),
            })}
          >
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {"Account"}
            </div>

            <div className={classNames(projectcss.all, sty.freeBox___9FGjg)}>
              <IconButton
                data-plasmic-name={"close"}
                data-plasmic-override={overrides.close}
                className={classNames("__wab_instance", sty.close)}
              >
                <IconCloseIcon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(projectcss.all, sty.svg)}
                  role={"img"}
                />
              </IconButton>
            </div>
          </div>
        ) : null}
        {true ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__iA4Y, {
              [sty.freeBoxisMobile__iA4YKb6FV]: hasVariant(
                variants,
                "isMobile",
                "isMobile"
              ),
            })}
          >
            {false ? (
              <PhotoAvatar
                data-plasmic-name={"photoAvatar"}
                data-plasmic-override={overrides.photoAvatar}
                className={classNames("__wab_instance", sty.photoAvatar)}
                userInitials={p.renderPlasmicSlot({
                  defaultContents: "KO",
                  value: args.userInitials,
                })}
              />
            ) : null}

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__tyRt7)}
            >
              {false
                ? p.renderPlasmicSlot({
                    defaultContents: "User Name",
                    value: args.userName,
                  })
                : null}
              {p.renderPlasmicSlot({
                defaultContents: "user@email.com",
                value: args.userEmail,
                className: classNames(sty.slotTargetUserEmail, {
                  [sty.slotTargetUserEmailisMobile]: hasVariant(
                    variants,
                    "isMobile",
                    "isMobile"
                  ),
                }),
              })}
            </p.Stack>
          </p.Stack>
        ) : null}

        <p.Stack
          as={"ul"}
          data-plasmic-name={"ul"}
          data-plasmic-override={overrides.ul}
          hasGap={true}
          className={classNames(projectcss.all, projectcss.ul, sty.ul)}
        >
          <ListItem
            data-plasmic-name={"createNewVenture"}
            data-plasmic-override={overrides.createNewVenture}
            className={classNames("__wab_instance", sty.createNewVenture, {
              [sty.createNewVentureisMobile]: hasVariant(
                variants,
                "isMobile",
                "isMobile"
              ),
            })}
            rename={p.renderPlasmicSlot({
              defaultContents: "Create new Venture",
              value: args.prop,
            })}
          />

          <ListItem
            data-plasmic-name={"viewProfile"}
            data-plasmic-override={overrides.viewProfile}
            className={classNames("__wab_instance", sty.viewProfile, {
              [sty.viewProfileisMobile]: hasVariant(
                variants,
                "isMobile",
                "isMobile"
              ),
            })}
            rename={p.renderPlasmicSlot({
              defaultContents: "Profile",
              value: args.prop2,
            })}
          />

          <ListItem
            data-plasmic-name={"logout"}
            data-plasmic-override={overrides.logout}
            className={classNames("__wab_instance", sty.logout)}
            rename={p.renderPlasmicSlot({
              defaultContents: "Log Out",
              value: args.prop3,
            })}
          />
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "rectangle574",
    "text",
    "close",
    "svg",
    "photoAvatar",
    "ul",
    "createNewVenture",
    "viewProfile",
    "logout",
  ],
  rectangle574: [
    "rectangle574",
    "text",
    "close",
    "svg",
    "photoAvatar",
    "ul",
    "createNewVenture",
    "viewProfile",
    "logout",
  ],
  text: ["text"],
  close: ["close", "svg"],
  svg: ["svg"],
  photoAvatar: ["photoAvatar"],
  ul: ["ul", "createNewVenture", "viewProfile", "logout"],
  createNewVenture: ["createNewVenture"],
  viewProfile: ["viewProfile"],
  logout: ["logout"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  rectangle574: "div";
  text: "div";
  close: typeof IconButton;
  svg: "svg";
  photoAvatar: typeof PhotoAvatar;
  ul: "ul";
  createNewVenture: typeof ListItem;
  viewProfile: typeof ListItem;
  logout: typeof ListItem;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProfileDropdown__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProfileDropdown__VariantsArgs;
    args?: PlasmicProfileDropdown__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProfileDropdown__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicProfileDropdown__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicProfileDropdown__ArgProps,
      internalVariantPropNames: PlasmicProfileDropdown__VariantProps,
    });

    return PlasmicProfileDropdown__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProfileDropdown";
  } else {
    func.displayName = `PlasmicProfileDropdown.${nodeName}`;
  }
  return func;
}

export const PlasmicProfileDropdown = Object.assign(
  // Top-level PlasmicProfileDropdown renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    rectangle574: makeNodeComponent("rectangle574"),
    text: makeNodeComponent("text"),
    close: makeNodeComponent("close"),
    svg: makeNodeComponent("svg"),
    photoAvatar: makeNodeComponent("photoAvatar"),
    ul: makeNodeComponent("ul"),
    createNewVenture: makeNodeComponent("createNewVenture"),
    viewProfile: makeNodeComponent("viewProfile"),
    logout: makeNodeComponent("logout"),

    // Metadata about props expected for PlasmicProfileDropdown
    internalVariantProps: PlasmicProfileDropdown__VariantProps,
    internalArgProps: PlasmicProfileDropdown__ArgProps,
  }
);

export default PlasmicProfileDropdown;
/* prettier-ignore-end */
