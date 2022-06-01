// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: Rd6ctyxKvRM
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
import Button from "../../Button"; // plasmic-import: JU1t0P9pFY/component
import IconButton from "../../IconButton"; // plasmic-import: UIpuE7M1YY/component
import PhotoAvatar from "../../PhotoAvatar"; // plasmic-import: uaoIqTcPRC-/component
import InputText from "../../InputText"; // plasmic-import: v0nNSTRV39/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicModal.module.css"; // plasmic-import: Rd6ctyxKvRM/css

import IconPlusIcon from "./icons/PlasmicIcon__IconPlus"; // plasmic-import: B5QLKmr2tW/icon
import IconRightIcon from "./icons/PlasmicIcon__IconRight"; // plasmic-import: v822ZhrBq/icon
import IconCloseIcon from "./icons/PlasmicIcon__IconClose"; // plasmic-import: v016HsKmfL/icon

export type PlasmicModal__VariantMembers = {
  modalType: "deleteTimeline" | "editProfile" | "deleteVenture";
};

export type PlasmicModal__VariantsArgs = {
  modalType?: SingleChoiceArg<
    "deleteTimeline" | "editProfile" | "deleteVenture"
  >;
};

type VariantPropType = keyof PlasmicModal__VariantsArgs;
export const PlasmicModal__VariantProps = new Array<VariantPropType>(
  "modalType"
);

export type PlasmicModal__ArgsType = {
  organizationDescription?: React.ReactNode;
  organizationDescription2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicModal__ArgsType;
export const PlasmicModal__ArgProps = new Array<ArgPropType>(
  "organizationDescription",
  "organizationDescription2"
);

export type PlasmicModal__OverridesType = {
  root?: p.Flex<"div">;
  modalTypes?: p.Flex<"div">;
  deleteTimeline?: p.Flex<typeof Button>;
  text2?: p.Flex<"div">;
  cancelTimeline?: p.Flex<typeof Button>;
  text3?: p.Flex<"div">;
  text22?: p.Flex<"div">;
  deleteTimeline2?: p.Flex<"form">;
  deleteVenture?: p.Flex<typeof Button>;
  text5?: p.Flex<"div">;
  text24?: p.Flex<"div">;
  cancelVenture?: p.Flex<typeof Button>;
  text33?: p.Flex<"div">;
  text223?: p.Flex<"div">;
  editProfile?: p.Flex<"form">;
  close?: p.Flex<typeof IconButton>;
  photoAvatar?: p.Flex<typeof PhotoAvatar>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  nameField?: p.Flex<typeof InputText>;
  jobField?: p.Flex<typeof InputText>;
  cancelEdit?: p.Flex<typeof Button>;
  text4?: p.Flex<"div">;
  text23?: p.Flex<"div">;
  saveUser?: p.Flex<typeof Button>;
  text32?: p.Flex<"div">;
  text222?: p.Flex<"div">;
};

export interface DefaultModalProps {
  organizationDescription?: React.ReactNode;
  organizationDescription2?: React.ReactNode;
  modalType?: SingleChoiceArg<
    "deleteTimeline" | "editProfile" | "deleteVenture"
  >;
  className?: string;
}

export const defaultModal__Args: Partial<PlasmicModal__ArgsType> = {};

function PlasmicModal__RenderFunc(props: {
  variants: PlasmicModal__VariantsArgs;
  args: PlasmicModal__ArgsType;
  overrides: PlasmicModal__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultModal__Args, props.args);
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
        data-plasmic-name={"modalTypes"}
        data-plasmic-override={overrides.modalTypes}
        className={classNames(projectcss.all, sty.modalTypes, {
          [sty.modalTypesmodalType_deleteVenture]: hasVariant(
            variants,
            "modalType",
            "deleteVenture"
          ),
        })}
      >
        {(
          hasVariant(variants, "modalType", "deleteVenture")
            ? false
            : hasVariant(variants, "modalType", "editProfile")
            ? false
            : hasVariant(variants, "modalType", "deleteTimeline")
            ? true
            : false
        ) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___60GYf, {
              [sty.freeBoxmodalType_deleteTimeline___60GYfkpjFe]: hasVariant(
                variants,
                "modalType",
                "deleteTimeline"
              ),
              [sty.freeBoxmodalType_deleteVenture___60GYfbglY9]: hasVariant(
                variants,
                "modalType",
                "deleteVenture"
              ),
              [sty.freeBoxmodalType_editProfile___60GYfORiet]: hasVariant(
                variants,
                "modalType",
                "editProfile"
              ),
            })}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__ljTa5, {
                [sty.freeBoxmodalType_deleteTimeline__ljTa5KpjFe]: hasVariant(
                  variants,
                  "modalType",
                  "deleteTimeline"
                ),
              })}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__aUujC)}
              >
                {p.renderPlasmicSlot({
                  defaultContents: (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__yHkt8
                      )}
                    >
                      {"Delete this timeline?"}
                    </div>
                  ),

                  value: args.organizationDescription,
                  className: classNames(sty.slotTargetOrganizationDescription),
                })}
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__hxFmc)}
              >
                <Button
                  data-plasmic-name={"deleteTimeline"}
                  data-plasmic-override={overrides.deleteTimeline}
                  buttonStyle={"danger" as const}
                  count={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__n2P6S
                      )}
                    >
                      {"1"}
                    </div>
                  }
                  slot={
                    <IconPlusIcon
                      className={classNames(projectcss.all, sty.svg___3JrHd)}
                      role={"img"}
                    />
                  }
                  text2={
                    <div
                      data-plasmic-name={"text2"}
                      data-plasmic-override={overrides.text2}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text2
                      )}
                    >
                      {"Delete"}
                    </div>
                  }
                >
                  <IconRightIcon
                    className={classNames(projectcss.all, sty.svg___3WnXb)}
                    role={"img"}
                  />
                </Button>

                <Button
                  data-plasmic-name={"cancelTimeline"}
                  data-plasmic-override={overrides.cancelTimeline}
                  buttonFeatures={[]}
                  buttonStyle={"secondaryPurple" as const}
                  className={classNames("__wab_instance", sty.cancelTimeline, {
                    [sty.cancelTimelinemodalType_deleteTimeline]: hasVariant(
                      variants,
                      "modalType",
                      "deleteTimeline"
                    ),
                  })}
                  count={
                    <div
                      data-plasmic-name={"text3"}
                      data-plasmic-override={overrides.text3}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text3
                      )}
                    >
                      {"1"}
                    </div>
                  }
                  slot={
                    <IconPlusIcon
                      className={classNames(projectcss.all, sty.svg__seQ2S)}
                      role={"img"}
                    />
                  }
                  text2={
                    <div
                      data-plasmic-name={"text22"}
                      data-plasmic-override={overrides.text22}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text22
                      )}
                    >
                      {"Cancel"}
                    </div>
                  }
                >
                  <IconRightIcon
                    className={classNames(projectcss.all, sty.svg__oTsn)}
                    role={"img"}
                  />
                </Button>
              </p.Stack>
            </p.Stack>
          </p.Stack>
        ) : null}
        {(
          hasVariant(variants, "modalType", "deleteVenture")
            ? true
            : hasVariant(variants, "modalType", "editProfile")
            ? false
            : false
        ) ? (
          <p.Stack
            as={"form"}
            data-plasmic-name={"deleteTimeline2"}
            data-plasmic-override={overrides.deleteTimeline2}
            hasGap={true}
            className={classNames(projectcss.all, sty.deleteTimeline2, {
              [sty.deleteTimeline2modalType_deleteVenture]: hasVariant(
                variants,
                "modalType",
                "deleteVenture"
              ),
              [sty.deleteTimeline2modalType_editProfile]: hasVariant(
                variants,
                "modalType",
                "editProfile"
              ),
            })}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__zFspo, {
                [sty.freeBoxmodalType_deleteVenture__zFspobglY9]: hasVariant(
                  variants,
                  "modalType",
                  "deleteVenture"
                ),
              })}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__zzoZe, {
                  [sty.freeBoxmodalType_deleteVenture__zzoZEbglY9]: hasVariant(
                    variants,
                    "modalType",
                    "deleteVenture"
                  ),
                })}
              >
                {p.renderPlasmicSlot({
                  defaultContents: (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__o2J7M
                      )}
                    >
                      {"Remove this Venture?"}
                    </div>
                  ),

                  value: args.organizationDescription2,
                  className: classNames(sty.slotTargetOrganizationDescription2),
                })}
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__fFh)}
              >
                <Button
                  data-plasmic-name={"deleteVenture"}
                  data-plasmic-override={overrides.deleteVenture}
                  buttonStyle={"danger" as const}
                  count={
                    <div
                      data-plasmic-name={"text5"}
                      data-plasmic-override={overrides.text5}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text5
                      )}
                    >
                      {"1"}
                    </div>
                  }
                  slot={
                    <IconPlusIcon
                      className={classNames(projectcss.all, sty.svg__yS0Jx)}
                      role={"img"}
                    />
                  }
                  text2={
                    <div
                      data-plasmic-name={"text24"}
                      data-plasmic-override={overrides.text24}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text24
                      )}
                    >
                      {"Remove"}
                    </div>
                  }
                >
                  <IconRightIcon
                    className={classNames(projectcss.all, sty.svg__yhxik)}
                    role={"img"}
                  />
                </Button>

                <Button
                  data-plasmic-name={"cancelVenture"}
                  data-plasmic-override={overrides.cancelVenture}
                  buttonFeatures={[]}
                  buttonStyle={"secondaryPurple" as const}
                  className={classNames("__wab_instance", sty.cancelVenture, {
                    [sty.cancelVenturemodalType_deleteVenture]: hasVariant(
                      variants,
                      "modalType",
                      "deleteVenture"
                    ),
                  })}
                  count={
                    <div
                      data-plasmic-name={"text33"}
                      data-plasmic-override={overrides.text33}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text33
                      )}
                    >
                      {"1"}
                    </div>
                  }
                  slot={
                    <IconPlusIcon
                      className={classNames(projectcss.all, sty.svg__bDko)}
                      role={"img"}
                    />
                  }
                  text2={
                    <div
                      data-plasmic-name={"text223"}
                      data-plasmic-override={overrides.text223}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text223
                      )}
                    >
                      {"Cancel"}
                    </div>
                  }
                >
                  <IconRightIcon
                    className={classNames(projectcss.all, sty.svg__eYdY)}
                    role={"img"}
                  />
                </Button>
              </p.Stack>
            </p.Stack>
          </p.Stack>
        ) : null}
        {(
          hasVariant(variants, "modalType", "editProfile")
            ? true
            : hasVariant(variants, "modalType", "deleteTimeline")
            ? false
            : false
        ) ? (
          <form
            data-plasmic-name={"editProfile"}
            data-plasmic-override={overrides.editProfile}
            className={classNames(projectcss.all, sty.editProfile, {
              [sty.editProfilemodalType_deleteTimeline]: hasVariant(
                variants,
                "modalType",
                "deleteTimeline"
              ),
              [sty.editProfilemodalType_editProfile]: hasVariant(
                variants,
                "modalType",
                "editProfile"
              ),
            })}
          >
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__nnGk2)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__zsEuo
                  )}
                >
                  {"Edit Profile"}
                </div>

                <IconButton
                  data-plasmic-name={"close"}
                  data-plasmic-override={overrides.close}
                  className={classNames("__wab_instance", sty.close)}
                >
                  <IconCloseIcon
                    className={classNames(projectcss.all, sty.svg__mGzaq)}
                    role={"img"}
                  />
                </IconButton>
              </div>
            ) : null}
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__j441D)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__dr4Vw)}
                >
                  <PhotoAvatar
                    data-plasmic-name={"photoAvatar"}
                    data-plasmic-override={overrides.photoAvatar}
                    variant={["isLarge"]}
                  />

                  {false ? (
                    <p.PlasmicLink
                      data-plasmic-name={"link"}
                      data-plasmic-override={overrides.link}
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        sty.link
                      )}
                      component={Link}
                      platform={"nextjs"}
                    >
                      {"Remove Photo"}
                    </p.PlasmicLink>
                  ) : null}
                </p.Stack>
              </div>
            ) : null}

            <InputText
              data-plasmic-name={"nameField"}
              data-plasmic-override={overrides.nameField}
              className={classNames("__wab_instance", sty.nameField)}
              hasLabel={true}
              label={"Full Name"}
            >
              {"This will be used as your display name"}
            </InputText>

            <InputText
              data-plasmic-name={"jobField"}
              data-plasmic-override={overrides.jobField}
              className={classNames("__wab_instance", sty.jobField)}
              hasLabel={true}
              hasTextHelper={true}
              label={"What I Do"}
            >
              {"Let people know what you do"}
            </InputText>

            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__jmp0N)}
              >
                <Button
                  data-plasmic-name={"cancelEdit"}
                  data-plasmic-override={overrides.cancelEdit}
                  buttonStyle={"secondaryPurple" as const}
                  count={
                    <div
                      data-plasmic-name={"text4"}
                      data-plasmic-override={overrides.text4}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text4
                      )}
                    >
                      {"1"}
                    </div>
                  }
                  slot={
                    <IconPlusIcon
                      className={classNames(projectcss.all, sty.svg___8AXbA)}
                      role={"img"}
                    />
                  }
                  text2={
                    <div
                      data-plasmic-name={"text23"}
                      data-plasmic-override={overrides.text23}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text23
                      )}
                    >
                      {"Cancel"}
                    </div>
                  }
                >
                  <IconRightIcon
                    className={classNames(projectcss.all, sty.svg__oLhK8)}
                    role={"img"}
                  />
                </Button>

                {true ? (
                  <Button
                    data-plasmic-name={"saveUser"}
                    data-plasmic-override={overrides.saveUser}
                    buttonStyle={"primaryPurple" as const}
                    className={classNames("__wab_instance", sty.saveUser)}
                    count={
                      <div
                        data-plasmic-name={"text32"}
                        data-plasmic-override={overrides.text32}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text32
                        )}
                      >
                        {"1"}
                      </div>
                    }
                    slot={
                      <IconPlusIcon
                        className={classNames(projectcss.all, sty.svg__i1Uc0)}
                        role={"img"}
                      />
                    }
                    text2={
                      <div
                        data-plasmic-name={"text222"}
                        data-plasmic-override={overrides.text222}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text222
                        )}
                      >
                        {"Save"}
                      </div>
                    }
                  >
                    <IconRightIcon
                      className={classNames(projectcss.all, sty.svg__d1WR)}
                      role={"img"}
                    />
                  </Button>
                ) : null}
              </p.Stack>
            ) : null}
          </form>
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "modalTypes",
    "deleteTimeline",
    "text2",
    "cancelTimeline",
    "text3",
    "text22",
    "deleteTimeline2",
    "deleteVenture",
    "text5",
    "text24",
    "cancelVenture",
    "text33",
    "text223",
    "editProfile",
    "close",
    "photoAvatar",
    "link",
    "nameField",
    "jobField",
    "cancelEdit",
    "text4",
    "text23",
    "saveUser",
    "text32",
    "text222",
  ],
  modalTypes: [
    "modalTypes",
    "deleteTimeline",
    "text2",
    "cancelTimeline",
    "text3",
    "text22",
    "deleteTimeline2",
    "deleteVenture",
    "text5",
    "text24",
    "cancelVenture",
    "text33",
    "text223",
    "editProfile",
    "close",
    "photoAvatar",
    "link",
    "nameField",
    "jobField",
    "cancelEdit",
    "text4",
    "text23",
    "saveUser",
    "text32",
    "text222",
  ],
  deleteTimeline: ["deleteTimeline", "text2"],
  text2: ["text2"],
  cancelTimeline: ["cancelTimeline", "text3", "text22"],
  text3: ["text3"],
  text22: ["text22"],
  deleteTimeline2: [
    "deleteTimeline2",
    "deleteVenture",
    "text5",
    "text24",
    "cancelVenture",
    "text33",
    "text223",
  ],
  deleteVenture: ["deleteVenture", "text5", "text24"],
  text5: ["text5"],
  text24: ["text24"],
  cancelVenture: ["cancelVenture", "text33", "text223"],
  text33: ["text33"],
  text223: ["text223"],
  editProfile: [
    "editProfile",
    "close",
    "photoAvatar",
    "link",
    "nameField",
    "jobField",
    "cancelEdit",
    "text4",
    "text23",
    "saveUser",
    "text32",
    "text222",
  ],
  close: ["close"],
  photoAvatar: ["photoAvatar"],
  link: ["link"],
  nameField: ["nameField"],
  jobField: ["jobField"],
  cancelEdit: ["cancelEdit", "text4", "text23"],
  text4: ["text4"],
  text23: ["text23"],
  saveUser: ["saveUser", "text32", "text222"],
  text32: ["text32"],
  text222: ["text222"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  modalTypes: "div";
  deleteTimeline: typeof Button;
  text2: "div";
  cancelTimeline: typeof Button;
  text3: "div";
  text22: "div";
  deleteTimeline2: "form";
  deleteVenture: typeof Button;
  text5: "div";
  text24: "div";
  cancelVenture: typeof Button;
  text33: "div";
  text223: "div";
  editProfile: "form";
  close: typeof IconButton;
  photoAvatar: typeof PhotoAvatar;
  link: "a";
  nameField: typeof InputText;
  jobField: typeof InputText;
  cancelEdit: typeof Button;
  text4: "div";
  text23: "div";
  saveUser: typeof Button;
  text32: "div";
  text222: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicModal__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicModal__VariantsArgs;
    args?: PlasmicModal__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicModal__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicModal__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicModal__ArgProps,
      internalVariantPropNames: PlasmicModal__VariantProps,
    });

    return PlasmicModal__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicModal";
  } else {
    func.displayName = `PlasmicModal.${nodeName}`;
  }
  return func;
}

export const PlasmicModal = Object.assign(
  // Top-level PlasmicModal renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    modalTypes: makeNodeComponent("modalTypes"),
    deleteTimeline: makeNodeComponent("deleteTimeline"),
    text2: makeNodeComponent("text2"),
    cancelTimeline: makeNodeComponent("cancelTimeline"),
    text3: makeNodeComponent("text3"),
    text22: makeNodeComponent("text22"),
    deleteTimeline2: makeNodeComponent("deleteTimeline2"),
    deleteVenture: makeNodeComponent("deleteVenture"),
    text5: makeNodeComponent("text5"),
    text24: makeNodeComponent("text24"),
    cancelVenture: makeNodeComponent("cancelVenture"),
    text33: makeNodeComponent("text33"),
    text223: makeNodeComponent("text223"),
    editProfile: makeNodeComponent("editProfile"),
    close: makeNodeComponent("close"),
    photoAvatar: makeNodeComponent("photoAvatar"),
    link: makeNodeComponent("link"),
    nameField: makeNodeComponent("nameField"),
    jobField: makeNodeComponent("jobField"),
    cancelEdit: makeNodeComponent("cancelEdit"),
    text4: makeNodeComponent("text4"),
    text23: makeNodeComponent("text23"),
    saveUser: makeNodeComponent("saveUser"),
    text32: makeNodeComponent("text32"),
    text222: makeNodeComponent("text222"),

    // Metadata about props expected for PlasmicModal
    internalVariantProps: PlasmicModal__VariantProps,
    internalArgProps: PlasmicModal__ArgProps,
  }
);

export default PlasmicModal;
/* prettier-ignore-end */